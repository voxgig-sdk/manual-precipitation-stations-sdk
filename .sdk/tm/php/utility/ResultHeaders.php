<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK utility: result_headers

class ManualPrecipitationStationsResultHeaders
{
    public static function call(ManualPrecipitationStationsContext $ctx): ?ManualPrecipitationStationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
