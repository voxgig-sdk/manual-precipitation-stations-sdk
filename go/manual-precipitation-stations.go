package voxgigmanualprecipitationstationssdk

import (
	"github.com/voxgig-sdk/manual-precipitation-stations-sdk/go/core"
	"github.com/voxgig-sdk/manual-precipitation-stations-sdk/go/entity"
	"github.com/voxgig-sdk/manual-precipitation-stations-sdk/go/feature"
	_ "github.com/voxgig-sdk/manual-precipitation-stations-sdk/go/utility"
)

// Type aliases preserve external API.
type ManualPrecipitationStationsSDK = core.ManualPrecipitationStationsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ManualPrecipitationStationsEntity = core.ManualPrecipitationStationsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ManualPrecipitationStationsError = core.ManualPrecipitationStationsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCollectionEntityFunc = func(client *core.ManualPrecipitationStationsSDK, entopts map[string]any) core.ManualPrecipitationStationsEntity {
		return entity.NewCollectionEntity(client, entopts)
	}
	core.NewItemEntityFunc = func(client *core.ManualPrecipitationStationsSDK, entopts map[string]any) core.ManualPrecipitationStationsEntity {
		return entity.NewItemEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewManualPrecipitationStationsSDK = core.NewManualPrecipitationStationsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewManualPrecipitationStationsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ManualPrecipitationStationsSDK  { return NewManualPrecipitationStationsSDK(nil) }
func Test() *ManualPrecipitationStationsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
