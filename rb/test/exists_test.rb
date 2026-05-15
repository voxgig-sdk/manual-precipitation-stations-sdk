# ManualPrecipitationStations SDK exists test

require "minitest/autorun"
require_relative "../ManualPrecipitationStations_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ManualPrecipitationStationsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
