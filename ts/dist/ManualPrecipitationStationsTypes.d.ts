export interface Collection {
}
export interface CollectionListMatch {
    $action?: string;
    [action: string]: any;
}
export interface Item {
    assets?: Record<string, any>;
    features?: any[];
    geometry?: Record<string, any>;
    id?: string;
    links?: any[];
    numberMatched?: number;
    numberReturned?: number;
    properties?: Record<string, any>;
    stac_version?: string;
    type?: string;
}
export interface ItemLoadMatch {
    id: string;
}
export interface ItemListMatch {
    bbox?: any[];
    datetime?: string;
    limit?: number;
}
