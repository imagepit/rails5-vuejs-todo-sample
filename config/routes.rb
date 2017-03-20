Rails.application.routes.draw do
  resources :todos
  get 'home/index'
  root to: 'home#index'
  namespace :api, { format: 'json' } do
    namespace :v1 do 
      resources :todos
    end
  end
end
