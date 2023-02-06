Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  scope :api do
    resources :messages
    resources :contacts
    resources :chats
    resources :users
    resources :sessions, only: [:create]
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "application#logged_in"
    get :current, to: "sessions#get_current"
    get :show_by_email, to: "users#show_by_email"
    get :create_report, to: "report#show"
    root to: 'application#home'
  end
end
