/* tslint:disable */
/* eslint-disable */
/**
 * Confidentify API
 * Services that let you build confidence and identify matches in customer data. ## Features overview * Contact data processing services (tagged with `process`) which offer   validation and enrichment backed by inference and knowledge on complex   data types such as names, email addresses, phone numbers.  * Data matching and searching services (tagged with `matching`) that    allow you to identify duplicated data or matches against third party   contact data list.  * Dataset management services (tagged with `dataset`) that allow record storage and retrieval. ## Integrator notes: * Use the `/auth` endpoint to get an access token. Access tokens are temporary, so design the client the be capable of renewing it. * The APIs are rate-limited, so design the client to be capable of retrying with some delay upon HTTP 429 responses. 
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface DatasetStats
 */
export interface DatasetStats {
    /**
     * The amount of records that have been inserted to the dataset.
     * @type {number}
     * @memberof DatasetStats
     */
    recordsInserted?: number;
    /**
     * The amount of records that have been indexed for matching. Note that there may be a delay between uploading records and having them indexed. 
     * @type {number}
     * @memberof DatasetStats
     */
    recordsIndexed?: number;
}

export function DatasetStatsFromJSON(json: any): DatasetStats {
    return DatasetStatsFromJSONTyped(json, false);
}

export function DatasetStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsInserted': !exists(json, 'records_inserted') ? undefined : json['records_inserted'],
        'recordsIndexed': !exists(json, 'records_indexed') ? undefined : json['records_indexed'],
    };
}

export function DatasetStatsToJSON(value?: DatasetStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records_inserted': value.recordsInserted,
        'records_indexed': value.recordsIndexed,
    };
}


