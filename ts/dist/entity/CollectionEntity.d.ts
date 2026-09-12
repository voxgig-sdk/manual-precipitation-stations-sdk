import { ManualPrecipitationStationsEntityBase } from '../ManualPrecipitationStationsEntityBase';
import type { ManualPrecipitationStationsSDK } from '../ManualPrecipitationStationsSDK';
import type { Control } from '../types';
import type { Collection, CollectionListMatch } from '../ManualPrecipitationStationsTypes';
declare class CollectionEntity extends ManualPrecipitationStationsEntityBase<Collection> {
    constructor(client: ManualPrecipitationStationsSDK, entopts: any);
    make(this: CollectionEntity): CollectionEntity;
    list(this: any, reqmatch?: CollectionListMatch, ctrl?: Control): Promise<CollectionEntity[]>;
}
export { CollectionEntity };
