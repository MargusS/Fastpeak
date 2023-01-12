class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "ChatChannel_#{params[:id]}"
  end

  def unsubscribed
    stop_all_streams
  end
end