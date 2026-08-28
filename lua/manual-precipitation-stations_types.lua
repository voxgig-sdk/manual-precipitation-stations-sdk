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
---@field assets? table
---@field features? table
---@field geometry? table
---@field id? string
---@field links? table
---@field numberMatched? number
---@field numberReturned? number
---@field properties? table
---@field stac_version? string
---@field type? string

---@class ItemLoadMatch
---@field id string

---@class ItemListMatch
---@field bbox? table
---@field datetime? string
---@field limit? number

local M = {}

return M
