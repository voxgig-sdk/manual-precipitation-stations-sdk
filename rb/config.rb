# ManualPrecipitationStations SDK configuration

module ManualPrecipitationStationsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ManualPrecipitationStations",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://data.geo.admin.ch/api/stac/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "collection" => {},
          "item" => {},
        },
      },
      "entity" => {
        "collection" => {
          "fields" => [
            {
              "name" => "href",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "rel",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/ch.meteoschweiz.ogd-nime",
                  "parts" => [
                    "collections",
                    "ch.meteoschweiz.ogd-nime",
                  ],
                  "select" => {
                    "$action" => "chmeteoschweizogd_nime",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "item" => {
          "fields" => [
            {
              "name" => "assets",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "features",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "geometry",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "links",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "numberMatched",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "numberReturned",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "properties",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "stac_version",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "item",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "bbox",
                        "orig" => "bbox",
                        "type" => "`$ARRAY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/ch.meteoschweiz.ogd-nime/items",
                  "parts" => [
                    "collections",
                    "ch.meteoschweiz.ogd-nime",
                    "items",
                  ],
                  "select" => {
                    "exist" => [
                      "bbox",
                      "datetime",
                      "limit",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "item_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/ch.meteoschweiz.ogd-nime/items/{itemId}",
                  "parts" => [
                    "collections",
                    "ch.meteoschweiz.ogd-nime",
                    "items",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "itemId" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ManualPrecipitationStationsFeatures.make_feature(name)
  end
end
