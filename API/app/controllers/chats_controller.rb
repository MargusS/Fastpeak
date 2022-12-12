class ChatsController < ApplicationController
  include CurrentUserConcern
  include ActiveModel::Serializers::JSON

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
    @chatList = Chat.joins(:members).where(:members => {user_id: 1}).as_json(only: [:id,:name])
    @response = @chatList.map{|chat| 
        @members = User.joins(:members).where(:members => {chat_id: chat['id']}).where.not(id: 1)
        {**chat, members: @members}
    }
    render json: @response
  end 

  def show
    @chat = Chat.find(params[:id]).as_json(only: [:id,:name])
    @members = User.joins(:members).where.not(id: 1).where(:members => {chat_id: params[:id]}).as_json(only: [:id,:username,:status])
    @messages = Message.where(chat_id: params[:id]).map{|mess| 
      hash = mess.attributes
      if hash["user_id"] == 1
        {**hash, type: 'sent'}
      else
        {**hash, type: 'received'}
      end
    }

    @response = {**@chat, members: @members, messages: @messages}

    render json: @response
  end
end
