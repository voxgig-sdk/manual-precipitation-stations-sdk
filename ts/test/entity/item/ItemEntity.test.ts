

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ManualPrecipitationStationsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MANUAL_PRECIPITATION_STATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('MANUAL_PRECIPITATION_STATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ManualPrecipitationStationsSDK.test()
    const ent = testsdk.Item()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MANUAL_PRECIPITATION_STATIONS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"assets","req":false,"short":"Assets associated with this item (e.g., CSV data file)","type":"`$OBJECT`","index$":0},{"active":true,"name":"features","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"geometry","req":false,"short":"GeoJSON geometry of the station location","type":"`$OBJECT`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"links","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"numberMatched","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"numberReturned","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"properties","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"stac_version","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"item","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"bbox","orig":"bbox","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"kind":"query","name":"datetime","orig":"datetime","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /collections/ch.meteoschweiz.ogd-nime/items","json":"{\"operationId\":\"getManualPrecipitationItems\",\"parameters\":[{\"description\":\"Maximum number of items to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Bounding box to filter items by location (minLon,minLat,maxLon,maxLat)\",\"explode\":false,\"in\":\"query\",\"name\":\"bbox\",\"required\":false,\"schema\":{\"items\":{\"type\":\"number\"},\"maxItems\":4,\"minItems\":4,\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter items by datetime range (ISO 8601 format)\",\"in\":\"query\",\"name\":\"datetime\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Collection of STAC Items representing precipitation station data files\",\"properties\":{\"features\":{\"items\":{\"description\":\"STAC Item representing a precipitation station data file\",\"properties\":{\"assets\":{\"additionalProperties\":{\"description\":\"Asset representing a downloadable data file\",\"properties\":{\"href\":{\"description\":\"URL to download the asset\",\"format\":\"uri\",\"type\":\"string\"},\"roles\":{\"example\":[\"data\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the asset\",\"type\":\"string\"},\"type\":{\"description\":\"Media type of the asset\",\"example\":\"text/csv\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Assets associated with this item (e.g., CSV data file)\",\"type\":\"object\"},\"geometry\":{\"description\":\"GeoJSON geometry of the station location\",\"properties\":{\"coordinates\":{\"items\":{\"type\":\"number\"},\"maxItems\":3,\"minItems\":2,\"type\":\"array\"},\"type\":{\"example\":\"Point\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":\"ogd-nime-aig_d_recent\",\"type\":\"string\"},\"links\":{\"items\":{\"description\":\"Link to related resources\",\"properties\":{\"href\":{\"format\":\"uri\",\"type\":\"string\"},\"rel\":{\"example\":\"self\",\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"type\":{\"example\":\"application/json\",\"type\":\"string\"}},\"required\":[\"href\",\"rel\"],\"type\":\"object\"},\"type\":\"array\"},\"properties\":{\"properties\":{\"data_granularity\":{\"description\":\"Data granularity: d (daily), m (monthly), y (yearly)\",\"enum\":[\"d\",\"m\",\"y\"],\"type\":\"string\"},\"datetime\":{\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"end_datetime\":{\"format\":\"date-time\",\"type\":\"string\"},\"start_datetime\":{\"format\":\"date-time\",\"type\":\"string\"},\"station_id\":{\"description\":\"Three-letter station identifier\",\"example\":\"AIG\",\"type\":\"string\"},\"station_name\":{\"example\":\"Aigle\",\"type\":\"string\"},\"update_frequency\":{\"description\":\"Update frequency of the data file\",\"enum\":[\"recent\",\"historical\"],\"type\":\"string\"}},\"type\":\"object\"},\"stac_version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"type\":{\"example\":\"Feature\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"items\":{\"description\":\"Link to related resources\",\"properties\":{\"href\":{\"format\":\"uri\",\"type\":\"string\"},\"rel\":{\"example\":\"self\",\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"type\":{\"example\":\"application/json\",\"type\":\"string\"}},\"required\":[\"href\",\"rel\"],\"type\":\"object\"},\"type\":\"array\"},\"numberMatched\":{\"type\":\"integer\"},\"numberReturned\":{\"type\":\"integer\"},\"type\":{\"example\":\"FeatureCollection\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with data items\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/collections/ch.meteoschweiz.ogd-nime/items","segments":[{"lit":"collections"},{"lit":"ch.meteoschweiz.ogd-nime"},{"lit":"items"}],"select":{"exist":["bbox","datetime","limit"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /collections/ch.meteoschweiz.ogd-nime/items/{itemId}","json":"{\"operationId\":\"getManualPrecipitationItem\",\"parameters\":[{\"description\":\"Identifier of the specific data item (e.g., station file identifier)\",\"in\":\"path\",\"name\":\"itemId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"STAC Item representing a precipitation station data file\",\"properties\":{\"assets\":{\"additionalProperties\":{\"description\":\"Asset representing a downloadable data file\",\"properties\":{\"href\":{\"description\":\"URL to download the asset\",\"format\":\"uri\",\"type\":\"string\"},\"roles\":{\"example\":[\"data\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the asset\",\"type\":\"string\"},\"type\":{\"description\":\"Media type of the asset\",\"example\":\"text/csv\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Assets associated with this item (e.g., CSV data file)\",\"type\":\"object\"},\"geometry\":{\"description\":\"GeoJSON geometry of the station location\",\"properties\":{\"coordinates\":{\"items\":{\"type\":\"number\"},\"maxItems\":3,\"minItems\":2,\"type\":\"array\"},\"type\":{\"example\":\"Point\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":\"ogd-nime-aig_d_recent\",\"type\":\"string\"},\"links\":{\"items\":{\"description\":\"Link to related resources\",\"properties\":{\"href\":{\"format\":\"uri\",\"type\":\"string\"},\"rel\":{\"example\":\"self\",\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"type\":{\"example\":\"application/json\",\"type\":\"string\"}},\"required\":[\"href\",\"rel\"],\"type\":\"object\"},\"type\":\"array\"},\"properties\":{\"properties\":{\"data_granularity\":{\"description\":\"Data granularity: d (daily), m (monthly), y (yearly)\",\"enum\":[\"d\",\"m\",\"y\"],\"type\":\"string\"},\"datetime\":{\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"end_datetime\":{\"format\":\"date-time\",\"type\":\"string\"},\"start_datetime\":{\"format\":\"date-time\",\"type\":\"string\"},\"station_id\":{\"description\":\"Three-letter station identifier\",\"example\":\"AIG\",\"type\":\"string\"},\"station_name\":{\"example\":\"Aigle\",\"type\":\"string\"},\"update_frequency\":{\"description\":\"Update frequency of the data file\",\"enum\":[\"recent\",\"historical\"],\"type\":\"string\"}},\"type\":\"object\"},\"stac_version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"type\":{\"example\":\"Feature\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with specific data item\"},\"404\":{\"description\":\"Item not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/collections/ch.meteoschweiz.ogd-nime/items/{itemId}","rename":{"param":{"itemId":"id"}},"segments":[{"lit":"collections"},{"lit":"ch.meteoschweiz.ogd-nime"},{"lit":"items"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"item","name__orig":"item","Name":"Item","name_":"item","name-":"item","NAME":"ITEM","index$":1}, {"active":true,"entity":"item","key$":"BasicItemFlow","kind":"basic","name":"BasicItemFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"item_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"item_ref01","srcdatavar":"item_ref01_data","suffix":"_dt0"},"match":{"id":"item01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-item_ref01"}}],"index$":1}]}, 'Item')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let item_ref01_data = Object.values(setup.data.existing.item)[0] as any

    // LIST
    const item_ref01_ent = client.Item()
    const item_ref01_match: any = {}

    const item_ref01_list = (await item_ref01_ent.list(item_ref01_match)).map((e: any) => e.data())


    // LOAD
    const item_ref01_match_dt0: any = {}
    item_ref01_match_dt0.id = item_ref01_data.id
    const item_ref01_data_dt0 = (await item_ref01_ent.load(item_ref01_match_dt0)).data()
    assert(item_ref01_data_dt0.id === item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/item/ItemTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ManualPrecipitationStationsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['item01','item02','item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MANUAL_PRECIPITATION_STATIONS_TEST_ITEM_ENTID': idmap,
    'MANUAL_PRECIPITATION_STATIONS_TEST_LIVE': 'FALSE',
    'MANUAL_PRECIPITATION_STATIONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MANUAL_PRECIPITATION_STATIONS_TEST_ITEM_ENTID']

  const live = 'TRUE' === env.MANUAL_PRECIPITATION_STATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MANUAL_PRECIPITATION_STATIONS_TEST_ITEM_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ManualPrecipitationStationsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MANUAL_PRECIPITATION_STATIONS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
