class User < ApplicationRecord
  has_secure_password 
  validates_presence_of :email
  validates_uniqueness_of :email
  has_many :messages
  has_many :contacts
  has_many :friend, through: :contacts
end
