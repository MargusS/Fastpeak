class ReportController < ActionController::Base
  include CurrentUserConcern
  include ActionController::MimeResponds
  # skip_before_action :logged_in

  def show
    @current_month = Date.today.strftime("%m").to_i
    @total_messages_sent = Message.where(user_id: 1).count
    @month_messages_sent = Message.where(user_id: 1).group('(EXTRACT(MONTH FROM created_at))::integer').count
    @total_messages_rec = Chat.joins(:members).where(:members => {user_id: 1}).joins(:messages).where.not(:messages => {user_id: 1}).count
    @month_messages_rec = Chat.joins(:members).where(:members => {user_id: 1}).joins(:messages).where.not(:messages => {user_id: 1}).group('(EXTRACT(MONTH FROM messages.created_at))::integer').count
    respond_to do |format|
      format.html
      format.pdf do
        render pdf:"example", template: "report/show"
      end
    end
  end 
end
