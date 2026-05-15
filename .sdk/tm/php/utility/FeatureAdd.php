<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: feature_add

class ManualPrecipitationStationsFeatureAdd
{
    public static function call(ManualPrecipitationStationsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
