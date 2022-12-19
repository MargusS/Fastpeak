class SessionsController < ApplicationController
  include CurrentUserConcern
  skip_before_action :logged_in
  
  def create
    # reset_cookies
    # debugger
      @user = User.find_by(email: params["user"]["email"]).try(:authenticate, params["user"]["password"])

      if @user
        session[:user_id] = @user.id
        render json: {
          status: :created,
          logged_in: true,
          user:  UserSerializer.new(@user).serializable_hash[:data][:attributes]
          #
        }
      else
        render json: { status: 404 }, status: 404 and return
      end
  end

  def get_current
    render json: {
      current: @current_user
    }
  end
  
  def logout 
    reset_session
    reset_cookies
    render json: { 
        status: 200,
        logged_out: true,
      }
  end

  private
    def reset_cookies
      cookies[:auth_app] = {value: nil, expires: Time.utc(2000)}   
      cookies[:_session_id] = {value: nil, expires: Time.utc(2000)} 
    end
end