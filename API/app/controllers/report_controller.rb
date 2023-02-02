class ReportController < ApplicationController
  include CurrentUserConcern

  def create_report
    @all = controller_name.classify.constantize.all 
    render json: @all
  end 
end
