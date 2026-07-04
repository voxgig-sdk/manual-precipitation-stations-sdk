# Typed models for the ManualPrecipitationStations SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Collection:
    href: str
    rel: str
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class CollectionListMatch:
    href: Optional[str] = None
    rel: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Item:
    asset: Optional[dict] = None
    feature: Optional[list] = None
    geometry: Optional[dict] = None
    id: Optional[str] = None
    link: Optional[list] = None
    number_matched: Optional[int] = None
    number_returned: Optional[int] = None
    property: Optional[dict] = None
    stac_version: Optional[str] = None
    type: Optional[str] = None


@dataclass
class ItemLoadMatch:
    id: str


@dataclass
class ItemListMatch:
    asset: Optional[dict] = None
    feature: Optional[list] = None
    geometry: Optional[dict] = None
    id: Optional[str] = None
    link: Optional[list] = None
    number_matched: Optional[int] = None
    number_returned: Optional[int] = None
    property: Optional[dict] = None
    stac_version: Optional[str] = None
    type: Optional[str] = None

