class MessagesController < ApplicationController
    include CurrentUserConcern

    def create
        @message = Message.create!(content: params['message']['content'], user_id: 1, chat_id: params['message']['chat'] )
        render json: @message
    end
end
