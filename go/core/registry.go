package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCollectionEntityFunc func(client *ManualPrecipitationStationsSDK, entopts map[string]any) ManualPrecipitationStationsEntity

var NewItemEntityFunc func(client *ManualPrecipitationStationsSDK, entopts map[string]any) ManualPrecipitationStationsEntity

