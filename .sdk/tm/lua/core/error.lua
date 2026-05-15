-- ManualPrecipitationStations SDK error

local ManualPrecipitationStationsError = {}
ManualPrecipitationStationsError.__index = ManualPrecipitationStationsError


function ManualPrecipitationStationsError.new(code, msg, ctx)
  local self = setmetatable({}, ManualPrecipitationStationsError)
  self.is_sdk_error = true
  self.sdk = "ManualPrecipitationStations"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ManualPrecipitationStationsError:error()
  return self.msg
end


function ManualPrecipitationStationsError:__tostring()
  return self.msg
end


return ManualPrecipitationStationsError
