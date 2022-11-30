class ContactsController < ApplicationController
    include CurrentUserConcern

    def create
        @contact = Contact.create!(user_id: @current_user.id, friend_id: params['contact']['friend'])
        render json: @contact
    end 
end
