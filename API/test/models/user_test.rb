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
    assert @user.valid?, "Name should be at most 25 characters long"
  end
  test "name should be ok at 15 chars" do
    @user.username = 'aaa' 
    assert @user.valid?, "name should be ok at 15 chars"
  end
  test "name should be ok with 15 chars" do
    @user.username = 'a' * 15
    assert_not @user.valid?, "name should be ok with 15 chars"
  end

  test "email should be valid" do
    @user.email = 'agus@agus.com'
    assert @user.valid?, "Email should follow the standard email structure"
  end

  test "password should be at least 8 characters long" do
    @user = User.new(email:"agus@user.com", username:"test")
    @user.password = "123"
    assert_not @user.valid?, "Password should be at least 8 characters long"
  end

  test "password should be at least 8 characters long2" do
    @user = User.new(email:"agus@user.com", username:"test")
    @user.password = "123456789"
    assert @user.valid?, "Password should be at least 8 characters long"
  end

end
