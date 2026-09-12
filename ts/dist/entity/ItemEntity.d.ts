import { ManualPrecipitationStationsEntityBase } from '../ManualPrecipitationStationsEntityBase';
import type { ManualPrecipitationStationsSDK } from '../ManualPrecipitationStationsSDK';
import type { Control } from '../types';
import type { Item, ItemLoadMatch, ItemListMatch } from '../ManualPrecipitationStationsTypes';
declare class ItemEntity extends ManualPrecipitationStationsEntityBase<Item> {
    constructor(client: ManualPrecipitationStationsSDK, entopts: any);
    make(this: ItemEntity): ItemEntity;
    load(this: any, reqmatch?: ItemLoadMatch, ctrl?: Control): Promise<ItemEntity>;
    list(this: any, reqmatch?: ItemListMatch, ctrl?: Control): Promise<ItemEntity[]>;
}
export { ItemEntity };
