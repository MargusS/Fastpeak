class ApplicationController < ActionController::API
  def index
      @all = self.all 
      render json: @all
  end 

  def show
      @detail = self.find(params[:id])
      render json: @detail
  end 

  def create
      @create = self.create()
      render json: @create
  end 

  def update
      @detail = self.find(params[:id])
      @detail.update()
      render json: @detail
  end 

  def destroy
      @all = self.all 
      @detail = self.find(params[:id])
      @detail.destroy
      render json: @all
  end 
end
