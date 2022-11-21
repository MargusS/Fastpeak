class ApplicationController < ActionController::API
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
end
