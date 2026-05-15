<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: transform_request

require_once __DIR__ . '/../core/Helpers.php';

class ManualPrecipitationStationsTransformRequest
{
    public static function call(ManualPrecipitationStationsContext $ctx): mixed
    {
        $spec = $ctx->spec;
        $point = $ctx->point;
        if ($spec) {
            $spec->step = 'reqform';
        }
        $transform = ManualPrecipitationStationsHelpers::to_map(\Voxgig\Struct\Struct::getprop($point, 'transform'));
        if (!$transform) {
            return $ctx->reqdata;
        }
        $reqform = \Voxgig\Struct\Struct::getprop($transform, 'req');
        if (!$reqform) {
            return $ctx->reqdata;
        }
        return \Voxgig\Struct\Struct::transform(['reqdata' => $ctx->reqdata], $reqform);
    }
}
