class DashboardController < ApplicationController
  def show
    @domain = Domain.first
  end
end
