ruby '2.2.3'
source 'https://rubygems.org'

gem 'rails', github: "rails/rails"
gem 'sprockets-rails', github: "rails/sprockets-rails"
gem 'sprockets', github: "rails/sprockets"
gem 'sass-rails', github: "rails/sass-rails"
gem 'coffee-rails', github: 'rails/coffee-rails'
gem 'arel', github: "rails/arel"
gem 'rack', github: "rack/rack"
gem 'babel-transpiler'

gem 'uglifier', '>= 1.3.0'

gem 'jquery-rails'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'oj'
gem 'puma'
gem 'readthis'
gem 'hiredis'
gem 'sidekiq'
gem 'whois'
gem 'slim-rails'
gem 'nobrainer'

source 'https://rails-assets.org' do
  gem 'rails-assets-riot'
end

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'pry'
  gem 'rspec-rails'
  gem 'fabrication'
  gem 'dotenv-rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', github: 'rails/web-console'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end



