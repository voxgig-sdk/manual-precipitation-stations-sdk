import { CollectionEntity } from './entity/CollectionEntity';
import { ItemEntity } from './entity/ItemEntity';
export type * from './ManualPrecipitationStationsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ManualPrecipitationStationsEntityBase } from './ManualPrecipitationStationsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ManualPrecipitationStationsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Collection(entopts?: Record<string, any>): CollectionEntity;
    Item(entopts?: Record<string, any>): ItemEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ManualPrecipitationStationsSDK;
    tester(testopts?: any, sdkopts?: any): ManualPrecipitationStationsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ManualPrecipitationStationsSDK;
export { stdutil, config, BaseFeature, ManualPrecipitationStationsEntityBase, ManualPrecipitationStationsSDK, SDK, };
