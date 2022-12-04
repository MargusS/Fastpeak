class ContactsController < ApplicationController
    include CurrentUserConcern

    def create
        @contact = Contact.create!(user_id: @current_user.id, friend_id: params['contact']['friend'])
        render json: @contact
    end 

    def index
        @contacts = Contact.where(user_id: params[:id])
        @response = @contacts.map{|friend| User.find(friend.friend_id)}
        render json: @response
    end 
end
