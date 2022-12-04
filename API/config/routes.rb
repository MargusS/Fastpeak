Rails.application.routes.draw do
  resources :messages
  resources :contacts
  resources :chats
  resources :users
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: 'application#home'
end
