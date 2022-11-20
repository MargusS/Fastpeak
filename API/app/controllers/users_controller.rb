class UsersController < ApplicationController
  def index
    @all = User.first.contacts 
    render json: @all
  end 
end
