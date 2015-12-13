class TestAlertsController < ApplicationController
  def create
    sleep 1
    render json: Modals::TestAlert.new
  end
end
