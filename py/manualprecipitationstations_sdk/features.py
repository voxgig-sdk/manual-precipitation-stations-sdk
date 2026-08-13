# ManualPrecipitationStations SDK feature factory

from manualprecipitationstations_sdk.feature.base_feature import ManualPrecipitationStationsBaseFeature
from manualprecipitationstations_sdk.feature.test_feature import ManualPrecipitationStationsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ManualPrecipitationStationsBaseFeature(),
        "test": lambda: ManualPrecipitationStationsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
