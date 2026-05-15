<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ManualPrecipitationStationsMakeContext
{
    public static function call(array $ctxmap, ?ManualPrecipitationStationsContext $basectx): ManualPrecipitationStationsContext
    {
        return new ManualPrecipitationStationsContext($ctxmap, $basectx);
    }
}
