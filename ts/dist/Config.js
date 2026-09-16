"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ManualPrecipitationStations',
        slug: "manual-precipitation-stations",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://data.geo.admin.ch/api/stac/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            collection: {},
            item: {},
        }
    };
    entity = {
        "collection": {
            "fields": [
                {
                    "format": "uri",
                    "name": "href",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "rel",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                }
            ],
            "name": "collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/collections/ch.meteoschweiz.ogd-nime",
                            "segments": [
                                {
                                    "lit": "collections"
                                },
                                {
                                    "lit": "ch.meteoschweiz.ogd-nime"
                                }
                            ],
                            "select": {
                                "$action": "chmeteoschweizogd_nime"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "collections",
                                "ch.meteoschweiz.ogd-nime"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "item": {
            "fields": [
                {
                    "name": "assets",
                    "short": "Assets associated with this item (e.g., CSV data file)",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "features",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "geometry",
                    "short": "GeoJSON geometry of the station location",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "links",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "numberMatched",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "numberReturned",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "properties",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "stac_version",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "item",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "bbox",
                                        "orig": "bbox",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "datetime",
                                        "orig": "datetime",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/collections/ch.meteoschweiz.ogd-nime/items",
                            "segments": [
                                {
                                    "lit": "collections"
                                },
                                {
                                    "lit": "ch.meteoschweiz.ogd-nime"
                                },
                                {
                                    "lit": "items"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "bbox",
                                    "datetime",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "collections",
                                "ch.meteoschweiz.ogd-nime",
                                "items"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "item_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/collections/ch.meteoschweiz.ogd-nime/items/{itemId}",
                            "rename": {
                                "param": {
                                    "itemId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "collections"
                                },
                                {
                                    "lit": "ch.meteoschweiz.ogd-nime"
                                },
                                {
                                    "lit": "items"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "collections",
                                "ch.meteoschweiz.ogd-nime",
                                "items",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map