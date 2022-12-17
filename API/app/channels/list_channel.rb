class ListChannel < ApplicationCable::Channel

  def subscribed
    stream_from "ListChannel"
  end

  def unsubscribed
    stop_all_streams
  end
end