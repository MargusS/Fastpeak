class ReportController < ApplicationController
  include CurrentUserConcern
  include ActionController::MimeResponds
  skip_before_action :logged_in
  require "prawn"

  def create_report
    pdf=Prawn::Document.new
    pdf.text "Hello World"
    send_data(
      pdf.render,
      filename: 'hello.pdf',
      type: 'application/pdf')
  end 
end
