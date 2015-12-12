class DashboardController < ApplicationController
  def show
    @portal = Portal.first
  end
end
