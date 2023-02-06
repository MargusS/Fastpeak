class ReportController < ApplicationController
  include CurrentUserConcern
  include ActionController::MimeResponds
  skip_before_action :logged_in
  require "prawn"

  def show
    pdf = WickedPdf.new.pdf_from_string(
      render_to_string(layout: 'layouts/show')
    )
    send_data pdf, filename: "report.pdf"
  end 
end
