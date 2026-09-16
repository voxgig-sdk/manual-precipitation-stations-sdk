# ManualPrecipitationStations SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ManualPrecipitationStationsFeatures
  def self.make_feature(name)
    case name
    when "base"
      ManualPrecipitationStationsBaseFeature.new
    when "ratelimit"
      ManualPrecipitationStationsRatelimitFeature.new
    when "retry"
      ManualPrecipitationStationsRetryFeature.new
    when "test"
      ManualPrecipitationStationsTestFeature.new
    when "timeout"
      ManualPrecipitationStationsTimeoutFeature.new
    else
      ManualPrecipitationStationsBaseFeature.new
    end
  end
end
