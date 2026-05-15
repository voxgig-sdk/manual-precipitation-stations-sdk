# ManualPrecipitationStations SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ManualPrecipitationStationsUtility.registrar = ->(u) {
  u.clean = ManualPrecipitationStationsUtilities::Clean
  u.done = ManualPrecipitationStationsUtilities::Done
  u.make_error = ManualPrecipitationStationsUtilities::MakeError
  u.feature_add = ManualPrecipitationStationsUtilities::FeatureAdd
  u.feature_hook = ManualPrecipitationStationsUtilities::FeatureHook
  u.feature_init = ManualPrecipitationStationsUtilities::FeatureInit
  u.fetcher = ManualPrecipitationStationsUtilities::Fetcher
  u.make_fetch_def = ManualPrecipitationStationsUtilities::MakeFetchDef
  u.make_context = ManualPrecipitationStationsUtilities::MakeContext
  u.make_options = ManualPrecipitationStationsUtilities::MakeOptions
  u.make_request = ManualPrecipitationStationsUtilities::MakeRequest
  u.make_response = ManualPrecipitationStationsUtilities::MakeResponse
  u.make_result = ManualPrecipitationStationsUtilities::MakeResult
  u.make_point = ManualPrecipitationStationsUtilities::MakePoint
  u.make_spec = ManualPrecipitationStationsUtilities::MakeSpec
  u.make_url = ManualPrecipitationStationsUtilities::MakeUrl
  u.param = ManualPrecipitationStationsUtilities::Param
  u.prepare_auth = ManualPrecipitationStationsUtilities::PrepareAuth
  u.prepare_body = ManualPrecipitationStationsUtilities::PrepareBody
  u.prepare_headers = ManualPrecipitationStationsUtilities::PrepareHeaders
  u.prepare_method = ManualPrecipitationStationsUtilities::PrepareMethod
  u.prepare_params = ManualPrecipitationStationsUtilities::PrepareParams
  u.prepare_path = ManualPrecipitationStationsUtilities::PreparePath
  u.prepare_query = ManualPrecipitationStationsUtilities::PrepareQuery
  u.result_basic = ManualPrecipitationStationsUtilities::ResultBasic
  u.result_body = ManualPrecipitationStationsUtilities::ResultBody
  u.result_headers = ManualPrecipitationStationsUtilities::ResultHeaders
  u.transform_request = ManualPrecipitationStationsUtilities::TransformRequest
  u.transform_response = ManualPrecipitationStationsUtilities::TransformResponse
}
