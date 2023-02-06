class ReportController < ApplicationController
  include CurrentUserConcern
  skip_before_action :logged_in

  def show
    @current_month = Date.today.strftime("%m").to_i
    @total_messages_sent = Message.where(user_id: 1).count
    @month_messages_sent = Message.where(user_id: 1).group('(EXTRACT(MONTH FROM created_at))::integer').count
    @total_messages_rec = Chat.joins(:members).where(:members => {user_id: 1}).joins(:messages).where.not(:messages => {user_id: 1}).count
    @month_messages_rec = Chat.joins(:members).where(:members => {user_id: 1}).joins(:messages).where.not(:messages => {user_id: 1}).group('(EXTRACT(MONTH FROM messages.created_at))::integer').count
    pdf = WickedPdf.new.pdf_from_string(
      render_to_string(layout: 'layouts/show')
    )
    send_data pdf, filename: "report.pdf"
  end 
end
