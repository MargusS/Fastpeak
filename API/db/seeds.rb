user1 = User.create(email:'user1@email.com', username:'user1', password: 'user1', status:'active')
user2 = User.create(email:'user2@email.com', username:'user2', password: 'user2', status:'active')
user2 = User.create(email:'user3@email.com', username:'user3', password: 'user3', status:'active')

contact1 = Contact.create(user_id: 1,friend_id: 2)
contact1 = Contact.create(user_id: 1,friend_id: 3)

chat1 = Chat.create(name:'chat1')
chat1 = Chat.create(name:'chat2')

member1 = Member.create(user_id: 1,chat_id: 1)
member2 = Member.create(user_id: 2,chat_id: 1)
member4 = Member.create(user_id: 1,chat_id: 2)
member5 = Member.create(user_id: 3,chat_id: 2)

message1 = Message.create(content:'Hi user2', user_id: 1, chat_id: 1)
message2 = Message.create(content:'Hi user3', user_id: 1, chat_id: 2)