package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCollectionEntityFunc func(client *ManualPrecipitationStationsSDK, entopts map[string]any) ManualPrecipitationStationsEntity

var NewItemEntityFunc func(client *ManualPrecipitationStationsSDK, entopts map[string]any) ManualPrecipitationStationsEntity

