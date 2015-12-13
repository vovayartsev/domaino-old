class TestAlertsController < ApplicationController
  def create
    sleep 1
    render json: {status: 'OK'}
  end
end
