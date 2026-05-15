-- ProjectName SDK exists test

local sdk = require("manual-precipitation-stations_sdk")

describe("ManualPrecipitationStationsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
