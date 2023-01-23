require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = users(:one)
  end

  test "name should be at least 2 characters long" do
    @user.username = 'a'
    assert_not @user.valid?, "Name should be at least 2 characters long"
  end

  test "name should be at most 25 characters long" do
    @user.username = 'a' * 25
    assert_not @user.valid?, "Name should be at most 25 characters long"
  end
  test "name should be ok with 15 chars" do
    @user.username = 'a' * 15
    assert_not @user.valid?, "name should be ok with 15 chars"
  end

  test "email should be valid" do
    @user.email = 'invalid_email'
    assert_not @user.valid?, "Email should follow the standard email structure"
  end

  test "password should be at most 8 characters long" do
    @user.password_digest = 'pwd'
    assert_not @user.valid?, "Password should be at least 8 characters long"
  end

end
