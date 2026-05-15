<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ManualPrecipitationStationsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ManualPrecipitationStationsBaseFeature();
            case "test":
                return new ManualPrecipitationStationsTestFeature();
            default:
                return new ManualPrecipitationStationsBaseFeature();
        }
    }
}
