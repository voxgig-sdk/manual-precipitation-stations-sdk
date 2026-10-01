"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "collection",
        "accessor": "Collection",
        "op": "list",
        "method": "GET",
        "path": "/collections/ch.meteoschweiz.ogd-nime",
        "action": "chmeteoschweizogd_nime",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "ch.meteoschweiz.ogd-nime",
            "type": "Collection",
            "title": "Manual Precipitation Stations",
            "description": "Manual precipitation monitoring network data from MeteoSwiss",
            "stac_version": "1.0.0",
            "license": "proprietary",
            "extent": {
                "spatial": {
                    "bbox": [
                        [
                            1
                        ]
                    ]
                },
                "temporal": {
                    "interval": [
                        [
                            "x"
                        ]
                    ]
                }
            },
            "links": [
                {
                    "href": "x",
                    "rel": "self",
                    "title": "x",
                    "type": "application/json"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "item",
        "accessor": "Item",
        "op": "list",
        "method": "GET",
        "path": "/collections/ch.meteoschweiz.ogd-nime/items",
        "args": [],
        "select": {
            "bbox": "v1",
            "datetime": "v1",
            "limit": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "bbox",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "type": "FeatureCollection",
            "features": [
                {
                    "assets": {},
                    "geometry": {
                        "coordinates": [
                            1
                        ],
                        "type": "Point"
                    },
                    "id": "ogd-nime-aig_d_recent",
                    "links": [
                        {
                            "href": "x",
                            "rel": "self",
                            "title": "x",
                            "type": "application/json"
                        }
                    ],
                    "properties": {
                        "data_granularity": "d",
                        "datetime": "2026-01-01T00:00:00Z",
                        "end_datetime": "2026-01-01T00:00:00Z",
                        "start_datetime": "2026-01-01T00:00:00Z",
                        "station_id": "AIG",
                        "station_name": "Aigle",
                        "update_frequency": "recent"
                    },
                    "stac_version": "1.0.0",
                    "type": "Feature"
                }
            ],
            "links": [
                {
                    "href": "x",
                    "rel": "self",
                    "title": "x",
                    "type": "application/json"
                }
            ],
            "numberMatched": 1,
            "numberReturned": 1
        },
        "idField": "id"
    },
    {
        "entity": "item",
        "accessor": "Item",
        "op": "load",
        "method": "GET",
        "path": "/collections/ch.meteoschweiz.ogd-nime/items/{itemId}",
        "args": [
            {
                "name": "id",
                "wire": "itemId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "ogd-nime-aig_d_recent",
            "type": "Feature",
            "stac_version": "1.0.0",
            "geometry": {
                "coordinates": [
                    1
                ],
                "type": "Point"
            },
            "properties": {
                "data_granularity": "d",
                "datetime": "2026-01-01T00:00:00Z",
                "end_datetime": "2026-01-01T00:00:00Z",
                "start_datetime": "2026-01-01T00:00:00Z",
                "station_id": "AIG",
                "station_name": "Aigle",
                "update_frequency": "recent"
            },
            "assets": {},
            "links": [
                {
                    "href": "x",
                    "rel": "self",
                    "title": "x",
                    "type": "application/json"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map