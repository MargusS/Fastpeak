class User < ApplicationRecord
  has_one_attached :avatar

  validates_presence_of :email
  validates_uniqueness_of :email
  has_many :messages
  has_many :contacts
  has_many :friend, through: :contacts
  has_many :members
  has_many :chats, through: :members

  validates :username, length: { minimum: 2, maximum: 25 }

  PASSWORD_FORMAT = /\A(?=.{8,})/x

  has_secure_password 
  validates :password, presence: true,length: {minimum: 8}, format: { with: PASSWORD_FORMAT }, confirmation: true, on: :create 
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 

  def avatar_url
    Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
  end
end
