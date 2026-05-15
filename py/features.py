# ManualPrecipitationStations SDK feature factory

from feature.base_feature import ManualPrecipitationStationsBaseFeature
from feature.test_feature import ManualPrecipitationStationsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ManualPrecipitationStationsBaseFeature(),
        "test": lambda: ManualPrecipitationStationsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
