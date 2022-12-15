class ContactsController < ApplicationController
    include CurrentUserConcern

    def create
        @contact_user = Contact.create!(user_id: @current_user.id, friend_id: params['contact']['friend'])
        @contact_friend = Contact.create!(user_id: params['contact']['friend'], friend_id: @current_user.id)
        render json: {contact_user: @contact_user, contact_friend:  @contact_friend}
    end 

    def index
        @contacts = Contact.where(user_id: @current_user.id)
        @response = @contacts.map{|friend| User.find(friend.friend_id)}
        render json: @response
    end 
end
