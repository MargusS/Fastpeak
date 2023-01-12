class ContactsController < ApplicationController
    include CurrentUserConcern

    def create
        @contact_user = Contact.create!(user_id: @current_user.id, friend_id: params['contact']['id'])
        @contact_friend = Contact.create!(user_id: params['contact']['id'], friend_id: @current_user.id)
        render json: {contact_user: @contact_user, contact_friend:  @contact_friend}
    end 

    def index
        @contacts = Contact.where(user_id: @current_user.id)
        @response = @contacts.map{|friend| 
           user = User.find(friend.friend_id)
           UserSerializer.new(user).serializable_hash[:data][:attributes]
        }
        render json: @response
    end 

    def destroy
        @all = Contact.all 
        @contact = Contact.where(user_id: @current_user.id, friend_id: params[:id])[0]
        @contact.destroy
        @contact = Contact.where(user_id: params[:id], friend_id: @current_user.id)[0]
        @contact.destroy
        render json: @all
    end 
end
