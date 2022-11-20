# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.create(email:'user1@email.com', username:'user1', password: 'user1', status:'active')
user2 = User.create(email:'user2@email.com', username:'user2', password: 'user2', status:'active')

contact1 = Contact.create(user_id: 1,friend_id: 2)

chat1 = Chat.create(name:'chat1')

participant1 = Participant.create(user_id: 1,chat_id: 1)
participant2 = Participant.create(user_id: 2,chat_id: 1)

message1 = Message.create(content:'Hi user2', user_id: 1, chat_id: 1)
message2 = Message.create(content:'Hi user1', user_id: 2, chat_id: 1)