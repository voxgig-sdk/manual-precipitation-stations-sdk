# ManualPrecipitationStations SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ManualPrecipitationStations",
            "slug": "manual-precipitation-stations",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://data.geo.admin.ch/api/stac/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "collection": {},
                "item": {},
            },
        },
        "entity": {
      "collection": {
        "fields": [],
        "name": "collection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/ch.meteoschweiz.ogd-nime",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "lit": "ch.meteoschweiz.ogd-nime",
                  },
                ],
                "parts": [
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "chmeteoschweizogd_nime",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "item": {
        "fields": [
          {
            "name": "assets",
            "title": "Assets",
            "type": "`$OBJECT`",
            "short": "Assets associated with this item (e.g., CSV data file)",
          },
          {
            "name": "features",
            "title": "Features",
            "type": "`$ARRAY`",
          },
          {
            "name": "geometry",
            "title": "Geometry",
            "type": "`$OBJECT`",
            "short": "GeoJSON geometry of the station location",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$ARRAY`",
          },
          {
            "name": "numberMatched",
            "title": "Number Matched",
            "type": "`$INTEGER`",
          },
          {
            "name": "numberReturned",
            "title": "Number Returned",
            "type": "`$INTEGER`",
          },
          {
            "name": "properties",
            "title": "Properties",
            "type": "`$OBJECT`",
          },
          {
            "name": "stac_version",
            "title": "Stac Version",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "item",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/ch.meteoschweiz.ogd-nime/items",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "lit": "ch.meteoschweiz.ogd-nime",
                  },
                  {
                    "lit": "items",
                  },
                ],
                "parts": [
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                  "items",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "bbox",
                      "orig": "bbox",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "bbox",
                    "datetime",
                    "limit",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/ch.meteoschweiz.ogd-nime/items/{itemId}",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "lit": "ch.meteoschweiz.ogd-nime",
                  },
                  {
                    "lit": "items",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                  "items",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "itemId": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "item_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
