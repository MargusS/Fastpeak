class UsersController < ApplicationController
  skip_before_action :logged_in
  include CurrentUserConcern

  def create
    @user = User.create!(user_params)

    if @user
      session[:user_id] = @user.id
      render json:{
        status: :created,
        user: UserSerializer.new(@user).serializable_hash[:data][:attributes]
      }
    else
      render json: {status: 500}
    end
  end

  def update
    if @current_user.id = params[:id]
      # @test = "no"
      # if params[:user][:password]
      #   @test = params[:user][:password]
      # end
      @user = User.find(params[:id])
      @user.update(user_params)
    end
    render json: UserSerializer.new(@user).serializable_hash[:data][:attributes]
  end 

  def show
      @user = User.find(params[:id])
      render json: {user: UserSerializer.new(@user).serializable_hash[:data][:attributes]}
  end

  def show_by_email
    if params[:user][:email] != @current_user.email 
      @user = User.where(user_params)
      render json: {user: @user.map{|user| UserSerializer.new(user).serializable_hash[:data][:attributes]}}
    else
      render json: {Message:  "It's not possible to you search yourself"}, status: 404 and return
    end
  end

  def user_params
    params.require(:user).permit(:id,:email,:username,:password,:password_confirmation,:status,:avatar)
  end
end
