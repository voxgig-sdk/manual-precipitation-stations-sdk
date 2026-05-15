<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ManualPrecipitationStationsUtility::setRegistrar(function (ManualPrecipitationStationsUtility $u): void {
    $u->clean = [ManualPrecipitationStationsClean::class, 'call'];
    $u->done = [ManualPrecipitationStationsDone::class, 'call'];
    $u->make_error = [ManualPrecipitationStationsMakeError::class, 'call'];
    $u->feature_add = [ManualPrecipitationStationsFeatureAdd::class, 'call'];
    $u->feature_hook = [ManualPrecipitationStationsFeatureHook::class, 'call'];
    $u->feature_init = [ManualPrecipitationStationsFeatureInit::class, 'call'];
    $u->fetcher = [ManualPrecipitationStationsFetcher::class, 'call'];
    $u->make_fetch_def = [ManualPrecipitationStationsMakeFetchDef::class, 'call'];
    $u->make_context = [ManualPrecipitationStationsMakeContext::class, 'call'];
    $u->make_options = [ManualPrecipitationStationsMakeOptions::class, 'call'];
    $u->make_request = [ManualPrecipitationStationsMakeRequest::class, 'call'];
    $u->make_response = [ManualPrecipitationStationsMakeResponse::class, 'call'];
    $u->make_result = [ManualPrecipitationStationsMakeResult::class, 'call'];
    $u->make_point = [ManualPrecipitationStationsMakePoint::class, 'call'];
    $u->make_spec = [ManualPrecipitationStationsMakeSpec::class, 'call'];
    $u->make_url = [ManualPrecipitationStationsMakeUrl::class, 'call'];
    $u->param = [ManualPrecipitationStationsParam::class, 'call'];
    $u->prepare_auth = [ManualPrecipitationStationsPrepareAuth::class, 'call'];
    $u->prepare_body = [ManualPrecipitationStationsPrepareBody::class, 'call'];
    $u->prepare_headers = [ManualPrecipitationStationsPrepareHeaders::class, 'call'];
    $u->prepare_method = [ManualPrecipitationStationsPrepareMethod::class, 'call'];
    $u->prepare_params = [ManualPrecipitationStationsPrepareParams::class, 'call'];
    $u->prepare_path = [ManualPrecipitationStationsPreparePath::class, 'call'];
    $u->prepare_query = [ManualPrecipitationStationsPrepareQuery::class, 'call'];
    $u->result_basic = [ManualPrecipitationStationsResultBasic::class, 'call'];
    $u->result_body = [ManualPrecipitationStationsResultBody::class, 'call'];
    $u->result_headers = [ManualPrecipitationStationsResultHeaders::class, 'call'];
    $u->transform_request = [ManualPrecipitationStationsTransformRequest::class, 'call'];
    $u->transform_response = [ManualPrecipitationStationsTransformResponse::class, 'call'];
});
