# frozen_string_literal: true

class Settings::ImportsController < ApplicationController
  layout 'admin'

  before_action :authenticate_user!

  def show
    @import = Import.new
  end
end
