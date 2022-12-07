class ChatsController < ApplicationController
  include CurrentUserConcern

  def create  
    @chat = Chat.create!(name: params['chat']['name'])
    
    # create a new member with the current user
    @member = Member.create(user_id: params['chat']['user'], chat_id: @chat.id)
    # create the member with the members list
    @member = Member.create(user_id:@current_user.id, chat_id:@chat.id)

    # create a new message
    @message = Message.create(content: params['chat']['message']['content'], user_id: @current_user.id, chat_id: @chat.id)

    render json: @chat
  end

  def show
    @chat = Chat.find(params[:id])
    @members = Member.where(chat_id: params[:id]).where.not(user_id: 1).map{|friend| User.find(friend.id)}
    render json: {
      chat: @chat,
      members: @members
    }
  end 
end
