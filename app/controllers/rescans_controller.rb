class RescansController < ApplicationController
  def create
    sleep 1
    render json: {status: 'OK'}
  end
end
