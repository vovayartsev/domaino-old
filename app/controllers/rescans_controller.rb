class RescansController < ApplicationController
  def create
    RescanJob.perform_later
    sleep 0.5
    render json: {status: 'OK'}
  end
end
