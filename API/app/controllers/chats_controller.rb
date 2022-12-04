class ChatsController < ApplicationController
  include CurrentUserConcern

  def create  
    @chat = Chat.create!(name: params['chat']['name'])
      
    # create a new message
    @message = Message.create(content: params['chat']['message']['content'], user_id: @current_user.id, chat_id: @chat.id)

    render json: @chat
  end
end
