# frozen_string_literal: true

# Typed models for the ManualPrecipitationStations SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Collection entity data model.
#
# @!attribute [rw] href
#   @return [String]
#
# @!attribute [rw] rel
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Collection = Struct.new(
  :href,
  :rel,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Collection#list.
#
# @!attribute [rw] href
#   @return [String, nil]
#
# @!attribute [rw] rel
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
CollectionListMatch = Struct.new(
  :href,
  :rel,
  :title,
  :type,
  keyword_init: true
)

# Item entity data model.
#
# @!attribute [rw] assets
#   @return [Hash, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Array, nil]
#
# @!attribute [rw] numberMatched
#   @return [Integer, nil]
#
# @!attribute [rw] numberReturned
#   @return [Integer, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] stac_version
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Item = Struct.new(
  :assets,
  :features,
  :geometry,
  :id,
  :links,
  :numberMatched,
  :numberReturned,
  :properties,
  :stac_version,
  :type,
  keyword_init: true
)

# Request payload for Item#load.
#
# @!attribute [rw] id
#   @return [String]
ItemLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Item#list.
#
# @!attribute [rw] assets
#   @return [Hash, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Array, nil]
#
# @!attribute [rw] numberMatched
#   @return [Integer, nil]
#
# @!attribute [rw] numberReturned
#   @return [Integer, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] stac_version
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ItemListMatch = Struct.new(
  :assets,
  :features,
  :geometry,
  :id,
  :links,
  :numberMatched,
  :numberReturned,
  :properties,
  :stac_version,
  :type,
  keyword_init: true
)

