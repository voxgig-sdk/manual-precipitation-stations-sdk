<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: result_body

class ManualPrecipitationStationsResultBody
{
    public static function call(ManualPrecipitationStationsContext $ctx): ?ManualPrecipitationStationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
