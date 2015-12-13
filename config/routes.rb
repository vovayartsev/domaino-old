Rails.application.routes.draw do
  root to: 'dashboard#show'

  resources :test_alerts
end
