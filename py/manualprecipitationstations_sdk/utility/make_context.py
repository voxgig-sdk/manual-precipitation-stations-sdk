# ManualPrecipitationStations SDK utility: make_context

from manualprecipitationstations_sdk.core.context import ManualPrecipitationStationsContext


def make_context_util(ctxmap, basectx):
    return ManualPrecipitationStationsContext(ctxmap, basectx)
