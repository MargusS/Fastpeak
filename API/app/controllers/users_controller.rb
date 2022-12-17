class UsersController < ApplicationController
  def create
    @user = User.create!(user_params)

    if @user
      session[:user_id] = @user.id
      render json:{
        status: :created,
        user: @user
      }
    else
      render json: {status: 500}
    end
  end

  def user_params
    params.require(:user).permit(:email,:username,:password,:password_confirmation,:status,:avatar)
  end
end
