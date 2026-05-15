package = "voxgig-sdk-manual-precipitation-stations"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/manual-precipitation-stations-sdk.git"
}
description = {
  summary = "ManualPrecipitationStations SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["manual-precipitation-stations_sdk"] = "manual-precipitation-stations_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
