
import { Context } from './Context'


class ManualPrecipitationStationsError extends Error {

  isManualPrecipitationStationsError = true

  sdk = 'ManualPrecipitationStations'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ManualPrecipitationStationsError
}

