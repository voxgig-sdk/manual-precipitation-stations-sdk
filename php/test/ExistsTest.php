<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK exists test

require_once __DIR__ . '/../manualprecipitationstations_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ManualPrecipitationStationsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
