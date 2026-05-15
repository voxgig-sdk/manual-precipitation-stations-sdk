<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: prepare_body

class ManualPrecipitationStationsPrepareBody
{
    public static function call(ManualPrecipitationStationsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
