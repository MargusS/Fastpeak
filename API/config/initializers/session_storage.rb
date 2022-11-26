# We are going to define the structure of cookies

if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_auth_app", domain: 'domain.heroku.com'
else
  Rails.application.config.session_store :cookie_store, key: "_auth_app"
end