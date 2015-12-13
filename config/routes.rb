Rails.application.routes.draw do
  root to: 'dashboard#show'

  resources :test_alerts, only: [:create]
  resources :rescans, only: [:create]

end
