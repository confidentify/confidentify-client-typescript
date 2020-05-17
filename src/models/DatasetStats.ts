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
 * @interface DatasetStats
 */
export interface DatasetStats {
    /**
     * The amount of files uploaded and received for which processing has started.
     * @type {number}
     * @memberof DatasetStats
     */
    filesReceived?: number;
    /**
     * The amount of files uploaded that has been fully processed.  Note that there may be a delay between submitting files and having them processed. If this number is less than `files_received`, it means that files are currently queued for processing. 
     * @type {number}
     * @memberof DatasetStats
     */
    filesProcessed?: number;
    /**
     * The amount of documents that have been received for which processing has started.
     * @type {number}
     * @memberof DatasetStats
     */
    documentsReceived?: number;
    /**
     * The amount of documents that has been fully processed.  Note that there may be a delay between submitting documents and having them processed. If this number is less than `documents_received`, it means that documents are currently queued for processing. 
     * @type {number}
     * @memberof DatasetStats
     */
    documentsProcessed?: number;
    /**
     * The amount of records that have been inserted into the dataset. 
     * @type {number}
     * @memberof DatasetStats
     */
    recordsInserted?: number;
    /**
     * The amount of records that have been indexed for matching.  Note that there may be a delay between submitting records and having them indexed. If this number is less than `records_inserted`, it means that records are currently queued for indexing. 
     * @type {number}
     * @memberof DatasetStats
     */
    recordsIndexed?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof DatasetStats
     */
    recordsPerSource?: { [key: string]: number; };
}

export function DatasetStatsFromJSON(json: any): DatasetStats {
    return DatasetStatsFromJSONTyped(json, false);
}

export function DatasetStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filesReceived': !exists(json, 'files_received') ? undefined : json['files_received'],
        'filesProcessed': !exists(json, 'files_processed') ? undefined : json['files_processed'],
        'documentsReceived': !exists(json, 'documents_received') ? undefined : json['documents_received'],
        'documentsProcessed': !exists(json, 'documents_processed') ? undefined : json['documents_processed'],
        'recordsInserted': !exists(json, 'records_inserted') ? undefined : json['records_inserted'],
        'recordsIndexed': !exists(json, 'records_indexed') ? undefined : json['records_indexed'],
        'recordsPerSource': !exists(json, 'records_per_source') ? undefined : json['records_per_source'],
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
        
        'files_received': value.filesReceived,
        'files_processed': value.filesProcessed,
        'documents_received': value.documentsReceived,
        'documents_processed': value.documentsProcessed,
        'records_inserted': value.recordsInserted,
        'records_indexed': value.recordsIndexed,
        'records_per_source': value.recordsPerSource,
    };
}


