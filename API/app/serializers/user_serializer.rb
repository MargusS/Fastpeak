class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :email, :status, :avatar_url
end
