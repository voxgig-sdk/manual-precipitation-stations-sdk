-- Typed models for the ManualPrecipitationStations SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Collection
---@field href string
---@field rel string
---@field title? string
---@field type? string

---@class CollectionListMatch
---@field href? string
---@field rel? string
---@field title? string
---@field type? string

---@class Item
---@field asset? table
---@field feature? table
---@field geometry? table
---@field id? string
---@field link? table
---@field number_matched? number
---@field number_returned? number
---@field property? table
---@field stac_version? string
---@field type? string

---@class ItemLoadMatch
---@field id string

---@class ItemListMatch
---@field asset? table
---@field feature? table
---@field geometry? table
---@field id? string
---@field link? table
---@field number_matched? number
---@field number_returned? number
---@field property? table
---@field stac_version? string
---@field type? string

local M = {}

return M
