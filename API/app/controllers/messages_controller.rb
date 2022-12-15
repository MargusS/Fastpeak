class MessagesController < ApplicationController
    include CurrentUserConcern
    include ChatChannel 

    def create
        @message = Message.create!(content: params['message']['content'], user_id: 1, chat_id: params['message']['chat'] )
        
        # ActionCable.server.broadcast("chat_message_bicycles", { body: params['message']['content'] })
        ChatChannel.receive(params['message']['content'])
        
        render json: @message
    end
end
