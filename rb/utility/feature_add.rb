# ManualPrecipitationStations SDK utility: feature_add
module ManualPrecipitationStationsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
