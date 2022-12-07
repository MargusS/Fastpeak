class ApplicationController < ActionController::API
    include ActionController::Cookies
    include CurrentUserConcern
    # before_action :logged_in

  def index
      @all = controller_name.classify.constantize.all 
      render json: @all
  end 

  def show
      @detail = controller_name.classify.constantize.find(params[:id])
      render json: @detail
  end 

  def create
      @create = controller_name.classify.constantize.create()
      render json: @create
  end 

  def update
      @detail = controller_name.classify.constantize.find(params[:id])
      @detail.update()
      render json: @detail
  end 

  def destroy
      @all = controller_name.classify.constantize.all 
      @detail = controller_name.classify.constantize.find(params[:id])
      @detail.destroy
      render json: @all
  end 

  def logged_in
    unless @current_user
        render json: {
            logged_in: false
          }, status: :unauthorized and return
    end
  end
end
