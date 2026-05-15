# ManualPrecipitationStations SDK utility: make_context
require_relative '../core/context'
module ManualPrecipitationStationsUtilities
  MakeContext = ->(ctxmap, basectx) {
    ManualPrecipitationStationsContext.new(ctxmap, basectx)
  }
end
