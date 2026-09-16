# ManualPrecipitationStations SDK feature factory

from manualprecipitationstations_sdk.feature.base_feature import ManualPrecipitationStationsBaseFeature
from manualprecipitationstations_sdk.feature.ratelimit_feature import ManualPrecipitationStationsRatelimitFeature
from manualprecipitationstations_sdk.feature.retry_feature import ManualPrecipitationStationsRetryFeature
from manualprecipitationstations_sdk.feature.test_feature import ManualPrecipitationStationsTestFeature
from manualprecipitationstations_sdk.feature.timeout_feature import ManualPrecipitationStationsTimeoutFeature


_FEATURES = {
    "base": lambda: ManualPrecipitationStationsBaseFeature(),
    "ratelimit": lambda: ManualPrecipitationStationsRatelimitFeature(),
    "retry": lambda: ManualPrecipitationStationsRetryFeature(),
    "test": lambda: ManualPrecipitationStationsTestFeature(),
    "timeout": lambda: ManualPrecipitationStationsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
