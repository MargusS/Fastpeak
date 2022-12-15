class ChatChannel < ApplicationCable::Channel
  include CurrentUserConcern

  def subscribed
    # stop_all_streams
    # messages = Message.where(chat_id: params[:id])
    # stream_for messages
    stream_from "chat_message_bicycles"
  end

  def unsubscribed
    stop_all_streams
  end

  def receive(data)
    ActionCable.server.broadcast("chat_message_bicycles",{ body: data })
  end
end