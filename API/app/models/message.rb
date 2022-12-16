class Message < ApplicationRecord
  after_create_commit {broadcast_message}

  belongs_to :user
  belongs_to :chat

  def broadcast_message
     ActionCable.server.broadcast("ChatChannel", {
                                    id:,
                                    content: 
                                  })
  end
end
