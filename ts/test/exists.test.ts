
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ManualPrecipitationStationsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ManualPrecipitationStationsSDK.test()
    equal(null !== testsdk, true)
  })

})
