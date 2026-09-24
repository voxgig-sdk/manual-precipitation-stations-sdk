

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assets":{"a":true,"h":"Assets","n":"assets","r":false,"sh":"Assets associated with this item (e.g., CSV data file)","t":"`$OBJECT`","key$":"assets","index$":0},"features":{"a":true,"h":"Features","n":"features","r":false,"t":"`$ARRAY`","key$":"features","index$":1},"geometry":{"a":true,"h":"Geometry","n":"geometry","r":false,"sh":"GeoJSON geometry of the station location","t":"`$OBJECT`","key$":"geometry","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$ARRAY`","key$":"links","index$":4},"numberMatched":{"a":true,"h":"Number Matched","n":"numberMatched","r":false,"t":"`$INTEGER`","key$":"numberMatched","index$":5},"numberReturned":{"a":true,"h":"Number Returned","n":"numberReturned","r":false,"t":"`$INTEGER`","key$":"numberReturned","index$":6},"properties":{"a":true,"h":"Properties","n":"properties","r":false,"t":"`$OBJECT`","key$":"properties","index$":7},"stac_version":{"a":true,"h":"Stac Version","n":"stac_version","r":false,"t":"`$STRING`","key$":"stac_version","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":9}},"id":{"field":"id","name":"id"},"name":"item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /collections/ch.meteoschweiz.ogd-nime/items","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"bbox","or":"bbox","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"datetime","or":"datetime","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/collections/ch.meteoschweiz.ogd-nime/items","q":{"exist":["bbox","datetime","limit"]},"r":{},"s":[{"lit":"collections"},{"lit":"ch.meteoschweiz.ogd-nime"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /collections/ch.meteoschweiz.ogd-nime/items/{itemId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/collections/ch.meteoschweiz.ogd-nime/items/{itemId}","q":{"exist":["id"]},"r":{"param":{"itemId":"id"}},"s":[{"lit":"collections"},{"lit":"ch.meteoschweiz.ogd-nime"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"item","name__orig":"item","Name":"Item","name_":"item","name-":"item","NAME":"ITEM","index$":1}, {"active":true,"entity":"item","key$":"BasicItemFlow","kind":"basic","name":"BasicItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"item_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"item_ref01","srcdatavar":"item_ref01_data","suffix":"_dt0"},"m":{"id":"item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-item_ref01"}}],"index$":1}]}, 'Item', {"GET /collections/ch.meteoschweiz.ogd-nime/items":{"protocol":"http","operationId":"getManualPrecipitationItems","responses":{"200":{"description":"Successful response with data items","content":{"application/json":{"schema":{"type":"object","description":"Collection of STAC Items representing precipitation station data files","properties":{"type":{"example":"FeatureCollection","key$":"type","type":"string"},"features":{"items":{"description":"STAC Item representing a precipitation station data file","properties":{"assets":{"additionalProperties":{"description":"Asset representing a downloadable data file","properties":{"href":{"description":"URL to download the asset","format":"uri","type":"string"},"roles":{"example":["data"],"items":{"type":"string"},"type":"array"},"title":{"description":"Title of the asset","type":"string"},"type":{"description":"Media type of the asset","example":"text/csv","type":"string"}},"type":"object","x-ref":"#/components/schemas/Asset"},"description":"Assets associated with this item (e.g., CSV data file)","type":"object"},"geometry":{"description":"GeoJSON geometry of the station location","properties":{"coordinates":{"items":{"type":"number"},"maxItems":3,"minItems":2,"type":"array"},"type":{"example":"Point","type":"string"}},"type":"object"},"id":{"example":"ogd-nime-aig_d_recent","type":"string"},"links":{"items":{"description":"Link to related resources","properties":{"href":{"format":"uri","type":"string"},"rel":{"example":"self","type":"string"},"title":{"type":"string"},"type":{"example":"application/json","type":"string"}},"required":["href","rel"],"type":"object","x-ref":"#/components/schemas/Link"},"type":"array"},"properties":{"properties":{"data_granularity":{"description":"Data granularity: d (daily), m (monthly), y (yearly)","enum":["d","m","y"],"type":"string"},"datetime":{"format":"date-time","nullable":true,"type":"string"},"end_datetime":{"format":"date-time","type":"string"},"start_datetime":{"format":"date-time","type":"string"},"station_id":{"description":"Three-letter station identifier","example":"AIG","type":"string"},"station_name":{"example":"Aigle","type":"string"},"update_frequency":{"description":"Update frequency of the data file","enum":["recent","historical"],"type":"string"}},"type":"object"},"stac_version":{"example":"1.0.0","type":"string"},"type":{"example":"Feature","type":"string"}},"type":"object","x-ref":"#/components/schemas/Item"},"key$":"features","type":"array"},"links":{"items":{"description":"Link to related resources","properties":{"href":{"format":"uri","type":"string"},"rel":{"example":"self","type":"string"},"title":{"type":"string"},"type":{"example":"application/json","type":"string"}},"required":["href","rel"],"type":"object","x-ref":"#/components/schemas/Link"},"key$":"links","type":"array"},"numberMatched":{"key$":"numberMatched","type":"integer"},"numberReturned":{"key$":"numberReturned","type":"integer"}},"x-ref":"#/components/schemas/ItemCollection","index$":0}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"limit","in":"query","description":"Maximum number of items to return","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":1000},"index$":0},{"name":"bbox","in":"query","description":"Bounding box to filter items by location (minLon,minLat,maxLon,maxLat)","required":false,"schema":{"type":"array","items":{"type":"number"},"minItems":4,"maxItems":4},"style":"form","explode":false,"index$":1},{"name":"datetime","in":"query","description":"Filter items by datetime range (ISO 8601 format)","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified"},"GET /collections/ch.meteoschweiz.ogd-nime/items/{itemId}":{"protocol":"http","operationId":"getManualPrecipitationItem","responses":{"200":{"description":"Successful response with specific data item","content":{"application/json":{"schema":{"type":"object","description":"STAC Item representing a precipitation station data file","properties":{"id":{"example":"ogd-nime-aig_d_recent","type":"string","key$":"id"},"type":{"example":"Feature","type":"string","key$":"type"},"stac_version":{"example":"1.0.0","type":"string","key$":"stac_version"},"geometry":{"description":"GeoJSON geometry of the station location","properties":{"coordinates":{"items":{"type":"number"},"maxItems":3,"minItems":2,"type":"array"},"type":{"example":"Point","type":"string"}},"type":"object","key$":"geometry"},"properties":{"properties":{"data_granularity":{"description":"Data granularity: d (daily), m (monthly), y (yearly)","enum":["d","m","y"],"type":"string"},"datetime":{"format":"date-time","nullable":true,"type":"string"},"end_datetime":{"format":"date-time","type":"string"},"start_datetime":{"format":"date-time","type":"string"},"station_id":{"description":"Three-letter station identifier","example":"AIG","type":"string"},"station_name":{"example":"Aigle","type":"string"},"update_frequency":{"description":"Update frequency of the data file","enum":["recent","historical"],"type":"string"}},"type":"object","key$":"properties"},"assets":{"additionalProperties":{"description":"Asset representing a downloadable data file","properties":{"href":{"description":"URL to download the asset","format":"uri","type":"string"},"roles":{"example":["data"],"items":{"type":"string"},"type":"array"},"title":{"description":"Title of the asset","type":"string"},"type":{"description":"Media type of the asset","example":"text/csv","type":"string"}},"type":"object","x-ref":"#/components/schemas/Asset"},"description":"Assets associated with this item (e.g., CSV data file)","type":"object","key$":"assets"},"links":{"items":{"description":"Link to related resources","properties":{"href":{"format":"uri","type":"string"},"rel":{"example":"self","type":"string"},"title":{"type":"string"},"type":{"example":"application/json","type":"string"}},"required":["href","rel"],"type":"object","x-ref":"#/components/schemas/Link"},"type":"array","key$":"links"}},"x-ref":"#/components/schemas/Item","index$":0}}}},"404":{"description":"Item not found"},"500":{"description":"Internal server error"}},"parameters":[{"name":"itemId","in":"path","description":"Identifier of the specific data item (e.g., station file identifier)","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
