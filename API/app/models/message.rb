class Message < ApplicationRecord
  after_create_commit {broadcast_message}

  belongs_to :user
  belongs_to :chat

  def broadcast_message
     ActionCable.server.broadcast("ChatChannel_#{chat_id}", {
                                    id:,
                                    content:,
                                    user_id:,
                                    chat_id:,
                                    created_at:,
                                    updated_at:,
                                    type: 
                                  })
  end
end
