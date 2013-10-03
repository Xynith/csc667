require 'test_helper'

class Csc667ControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
