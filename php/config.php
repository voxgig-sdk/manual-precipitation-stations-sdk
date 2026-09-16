<?php
declare(strict_types=1);

// ManualPrecipitationStations SDK configuration

class ManualPrecipitationStationsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ManualPrecipitationStations",
                "slug" => "manual-precipitation-stations",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://data.geo.admin.ch/api/stac/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "collection" => [],
                    "item" => [],
                ],
            ],
            "entity" => [
        'collection' => [
          'fields' => [
            [
              'format' => 'uri',
              'name' => 'href',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rel',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/ch.meteoschweiz.ogd-nime',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'lit' => 'ch.meteoschweiz.ogd-nime',
                    ],
                  ],
                  'select' => [
                    '$action' => 'chmeteoschweizogd_nime',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'collections',
                    'ch.meteoschweiz.ogd-nime',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'item' => [
          'fields' => [
            [
              'name' => 'assets',
              'short' => 'Assets associated with this item (e.g., CSV data file)',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'features',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'geometry',
              'short' => 'GeoJSON geometry of the station location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'links',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'numberMatched',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'numberReturned',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'properties',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'stac_version',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'item',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'bbox',
                        'orig' => 'bbox',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/ch.meteoschweiz.ogd-nime/items',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'lit' => 'ch.meteoschweiz.ogd-nime',
                    ],
                    [
                      'lit' => 'items',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'bbox',
                      'datetime',
                      'limit',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'collections',
                    'ch.meteoschweiz.ogd-nime',
                    'items',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'item_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/ch.meteoschweiz.ogd-nime/items/{itemId}',
                  'rename' => [
                    'param' => [
                      'itemId' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'lit' => 'ch.meteoschweiz.ogd-nime',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'collections',
                    'ch.meteoschweiz.ogd-nime',
                    'items',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ManualPrecipitationStationsFeatures::make_feature($name);
    }
}
