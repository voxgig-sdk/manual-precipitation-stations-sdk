# ManualPrecipitationStations SDK utility: prepare_body
require_relative 'media'
module ManualPrecipitationStationsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ManualPrecipitationStationsUtilities.raw_body(ctx.reqdata) if ManualPrecipitationStationsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
