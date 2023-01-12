class User < ApplicationRecord
  has_secure_password 
  has_one_attached :avatar

  validates_presence_of :email
  validates_uniqueness_of :email
  has_many :messages
  has_many :contacts
  has_many :friend, through: :contacts
  has_many :members
  has_many :chats, through: :members

  def avatar_url
    Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
  end
end
