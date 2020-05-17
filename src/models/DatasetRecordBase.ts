/* tslint:disable */
/* eslint-disable */
/**
 * Confidentify API
 * Services that let you build confidence and identify matches in customer data. ## Features overview * Contact data processing services (tagged with `process`) which offer   validation and enrichment backed by inference and knowledge on complex   data types such as names, email addresses, phone numbers.  * Data matching and searching services (tagged with `matching`) that    allow you to identify duplicated data or matches against third party   contact data list.  * Dataset management services (tagged with `dataset`) that allow record storage and retrieval. ## Integrator notes: * Use the `/auth` endpoint to get an access token. Access tokens are temporary, so design the client the be capable of renewing it. * The APIs are rate-limited, so design the client to be capable of retrying with some delay upon HTTP 429 responses. 
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DatasetRecordBase
 */
export interface DatasetRecordBase {
    /**
     * A unique ID for the record 
     * @type {string}
     * @memberof DatasetRecordBase
     */
    id?: string;
    /**
     * The record\'s data with keys matching the properties defined in the dataset\'s `schema` 
     * @type {object}
     * @memberof DatasetRecordBase
     */
    entity?: object;
    /**
     * A string which identifies the source of the record. 
     * @type {string}
     * @memberof DatasetRecordBase
     */
    recordSource?: string;
}

export function DatasetRecordBaseFromJSON(json: any): DatasetRecordBase {
    return DatasetRecordBaseFromJSONTyped(json, false);
}

export function DatasetRecordBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetRecordBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'recordSource': !exists(json, 'record_source') ? undefined : json['record_source'],
    };
}

export function DatasetRecordBaseToJSON(value?: DatasetRecordBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'entity': value.entity,
        'record_source': value.recordSource,
    };
}


