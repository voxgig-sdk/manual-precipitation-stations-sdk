-- ManualPrecipitationStations SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ManualPrecipitationStations",
      slug = "manual-precipitation-stations",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://data.geo.admin.ch/api/stac/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["collection"] = {},
        ["item"] = {},
      },
    },
    entity = {
      ["collection"] = {
        ["fields"] = {
          {
            ["name"] = "href",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rel",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/collections/ch.meteoschweiz.ogd-nime",
                ["parts"] = {
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                },
                ["select"] = {
                  ["$action"] = "chmeteoschweizogd_nime",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["item"] = {
        ["fields"] = {
          {
            ["name"] = "assets",
            ["short"] = "Assets associated with this item (e.g., CSV data file)",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "features",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "geometry",
            ["short"] = "GeoJSON geometry of the station location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "links",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "numberMatched",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "numberReturned",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "properties",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "stac_version",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "item",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "bbox",
                      ["orig"] = "bbox",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/collections/ch.meteoschweiz.ogd-nime/items",
                ["parts"] = {
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                  "items",
                },
                ["select"] = {
                  ["exist"] = {
                    "bbox",
                    "datetime",
                    "limit",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/collections/ch.meteoschweiz.ogd-nime/items/{itemId}",
                ["parts"] = {
                  "collections",
                  "ch.meteoschweiz.ogd-nime",
                  "items",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["itemId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
