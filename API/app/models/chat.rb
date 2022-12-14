class Chat < ApplicationRecord
  has_many :messages, dependent: :delete_all
  has_many :members, dependent: :delete_all
  has_many :users, through: :members
end
