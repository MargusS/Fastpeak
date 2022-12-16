class MessagesController < ApplicationController
    include CurrentUserConcern
    include ChatChannel 

    def create
        @message = Message.create!(content: params['message']['content'], user_id: @current_user.id, chat_id: params['message']['chat'] )
        render json: @message
    end
end
