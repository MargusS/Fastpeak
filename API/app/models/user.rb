class User < ApplicationRecord
  has_many :messages
  has_many :contacts
  has_many :friend, through: :contacts
end
