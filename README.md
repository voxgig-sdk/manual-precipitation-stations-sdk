# ManualPrecipitationStations SDK

Daily rainfall and snow measurements from ~240 MeteoSwiss manual precipitation stations across Switzerland

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Manual Precipitation Stations

This SDK wraps the MeteoSwiss **Manual Precipitation Stations** dataset, exposed as a [STAC v1.0.0](https://stacspec.org/) collection on the Swiss Federal Spatial Data Infrastructure catalogue at [data.geo.admin.ch](https://data.geo.admin.ch/). The collection is `ch.meteoschweiz.ogd-nime` and is operated by [MeteoSwiss](https://www.meteoswiss.admin.ch/), the Swiss federal weather and climate office.

What you get from the API:

- A STAC collection describing roughly 240 manually-read precipitation stations across Switzerland
- STAC items per station / time slice, with GeoJSON geometry and asset links to the underlying CSV/data files
- Daily measurements of liquid precipitation (rain) and new snow
- Standard STAC navigation: `/collections`, `/collections/{collection_id}/items`, `/collections/{collection_id}/items/{item_id}` and the catalogue-wide `/search` endpoint

The service speaks plain HTTPS, returns GeoJSON / JSON, requires no API key, and has CORS enabled so it can be called directly from browsers. Rate limits are not formally documented; the service is shared public infrastructure, so cache responses and avoid hammering it.

## Try it

**TypeScript**
```bash
npm install manual-precipitation-stations
```

**Python**
```bash
pip install manual-precipitation-stations-sdk
```

**PHP**
```bash
composer require voxgig/manual-precipitation-stations-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/manual-precipitation-stations-sdk/go
```

**Ruby**
```bash
gem install manual-precipitation-stations-sdk
```

**Lua**
```bash
luarocks install manual-precipitation-stations-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ManualPrecipitationStationsSDK } from 'manual-precipitation-stations'

const client = new ManualPrecipitationStationsSDK({})

// List all collections
const collections = await client.Collection().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o manual-precipitation-stations-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "manual-precipitation-stations": {
      "command": "/abs/path/to/manual-precipitation-stations-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Collection** | A STAC Collection describing the manual precipitation station dataset (`ch.meteoschweiz.ogd-nime`), reachable at `/collections/{collection_id}` under `/api/stac/v1`. | `/collections/ch.meteoschweiz.ogd-nime` |
| **Item** | A STAC Item representing a single station's measurement record with geometry, temporal extent and asset links, listed under `/collections/{collection_id}/items` and fetched at `/collections/{collection_id}/items/{item_id}`. | `/collections/ch.meteoschweiz.ogd-nime/items` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from manualprecipitationstations_sdk import ManualPrecipitationStationsSDK

client = ManualPrecipitationStationsSDK({})

# List all collections
collections, err = client.Collection(None).list(None, None)
```

### PHP

```php
<?php
require_once 'manualprecipitationstations_sdk.php';

$client = new ManualPrecipitationStationsSDK([]);

// List all collections
[$collections, $err] = $client->Collection(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/manual-precipitation-stations-sdk/go"

client := sdk.NewManualPrecipitationStationsSDK(map[string]any{})

// List all collections
collections, err := client.Collection(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ManualPrecipitationStations_sdk"

client = ManualPrecipitationStationsSDK.new({})

# List all collections
collections, err = client.Collection(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("manual-precipitation-stations_sdk")

local client = sdk.new({})

-- List all collections
local collections, err = client:Collection(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ManualPrecipitationStationsSDK.test()
const result = await client.Collection().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ManualPrecipitationStationsSDK.test(None, None)
result, err = client.Collection(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ManualPrecipitationStationsSDK::test(null, null);
[$result, $err] = $client->Collection(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Collection(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ManualPrecipitationStationsSDK.test(nil, nil)
result, err = client.Collection(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Collection(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Manual Precipitation Stations

- Upstream: [https://www.meteoswiss.admin.ch/services-and-publications/service/open-data.html](https://www.meteoswiss.admin.ch/services-and-publications/service/open-data.html)
- API docs: [https://data.geo.admin.ch/api/stac/static/spec/v1/api.html](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html)

- Published as Swiss federal Open Government Data (OGD) via data.geo.admin.ch
- Free to use, redistribute and adapt for any purpose, including commercial use
- Attribution to MeteoSwiss / Federal Office of Meteorology and Climatology is expected
- Consult the MeteoSwiss Open Data terms of use for the canonical licence text

---

Generated from the Manual Precipitation Stations OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
