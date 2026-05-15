# ManualPrecipitationStations SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ManualPrecipitationStationsFeatures
  def self.make_feature(name)
    case name
    when "base"
      ManualPrecipitationStationsBaseFeature.new
    when "test"
      ManualPrecipitationStationsTestFeature.new
    else
      ManualPrecipitationStationsBaseFeature.new
    end
  end
end
