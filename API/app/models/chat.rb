class Chat < ApplicationRecord
  # after_create_commit {broadcast_list}
  
  has_many :messages, dependent: :delete_all
  has_many :members, dependent: :delete_all
  has_many :users, through: :members

#   def broadcast_list
    
#  end
end
