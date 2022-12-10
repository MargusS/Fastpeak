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

  def index
    @chatList = Member.where(user_id: 1).map{|member| Chat.find(member.chat_id).id}
    @chatsUser = @chatList.map{|chat| Member.where(chat_id: chat)}.map{|array| array.map{|member| User.where.not(id: 1).where(id: member.user_id)}}
    # @reduceLevel = @chatsUser.map{|array| array}
    render json: @chatsUser
  end 

  def show
    @chat = Chat.find(params[:id])
    @members = Member.where(chat_id: params[:id]).where.not(user_id: 1).map{|friend| User.find(friend.user_id)}
    @messages = Message.where(chat_id: params[:id]).map{|mess| 
      hash = mess.attributes
      if hash["user_id"] == 1
        {**hash, type: 'sent'}
      else
        {**hash, type: 'received'}
      end
    }
    render json: {
      chat: @chat,
      members: @members,
      messages: @messages
    }
  end 
end
