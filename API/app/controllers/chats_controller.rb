class ChatsController < ApplicationController
  include CurrentUserConcern

    def create
        @chat = Chat.create!(name: params['chat']['name'])
      
        # create a new participant with the current user
        @participant = Participant.create(user_id: params['chat']['user'], chat_id: @chat.id)
        # create the participant with the participants list
        @participant = Participant.create(user_id:@current_user.id, chat_id:@chat.id)

        render json: @chat
    end 
end
