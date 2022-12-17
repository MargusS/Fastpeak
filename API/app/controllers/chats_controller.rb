class ChatsController < ApplicationController
  include CurrentUserConcern
  include ActiveModel::Serializers::JSON

  def create  
    @chat = Chat.create!(name: params['chat']['name'])
    # create a new member with the current user
    @member_friend = Member.create(user_id: params['chat']['user'], chat_id: @chat.id)
    # create the member with the members list
    @member_self = Member.create(user_id: @current_user.id, chat_id:@chat.id)
    # create a new message
    @message = Message.create(content: params['chat']['message'], user_id: @current_user.id, chat_id: @chat.id)

    ActionCable.server.broadcast("ListChannel", {
      id: @chat.id,
      name: @chat.name,
      members: [User.find(@member_self.user_id)],
      type: "create"
    })
    render json: @chat
  end

  def index
    @chatList = Chat.joins(:members).where(:members => {user_id: @current_user.id}).as_json(only: [:id,:name])
    @response = @chatList.map{|chat| 
        @members = User.joins(:members).where(:members => {chat_id: chat['id']}).where.not(id: @current_user.id)
        {**chat, members: @members}
    }
   
    render json: @response
  end 

  def show
    @chat = Chat.find(params[:id]).as_json(only: [:id,:name])
    @members = User.joins(:members).where.not(id: @current_user.id).where(:members => {chat_id: params[:id]}).as_json(only: [:id,:username,:status])
    @messages = Message.where(chat_id: params[:id])
    @response = {**@chat, members: @members, messages: @messages}

    render json: @response
  end

  def destroy
    @all = Chat.all 
    @chat = Chat.find(params[:id])

    ActionCable.server.broadcast("ListChannel", {
      id: @chat.id,
      type: "destroy"
    })

    @chat.destroy
    render json: @all
  end
end
