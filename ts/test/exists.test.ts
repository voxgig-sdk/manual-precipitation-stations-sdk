
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ManualPrecipitationStationsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ManualPrecipitationStationsSDK.test()
    equal(testsdk instanceof ManualPrecipitationStationsSDK, true,
      'ManualPrecipitationStationsSDK.test() must return a client synchronously')
  })

})
