Rails.application.routes.draw do
  scope :api do
    resources :messages
    resources :contacts
    resources :chats
    resources :users
    resources :sessions, only: [:create]
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "application#logged_in"
    get :current, to: "sessions#get_current"
    root to: 'application#home'
  end
  # resources :messages
  # resources :contacts
  # resources :chats
  # resources :users
  # resources :sessions, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "application#logged_in"
  # get :current, to: "sessions#get_current"
  # root to: 'application#home'
end
