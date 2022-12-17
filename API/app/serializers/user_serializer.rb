class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :email, :password_digest, :status, :avatar, :avatar_url
end
