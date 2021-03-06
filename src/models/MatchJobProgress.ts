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
 * Provides progress data for the job.
 * @export
 * @interface MatchJobProgress
 */
export interface MatchJobProgress {
    /**
     * The number of records in the dataset being processed.
     * @type {number}
     * @memberof MatchJobProgress
     */
    recordsIndexed?: number;
    /**
     * The amount of \'index collisions\' identified in the dataset. This indicates how many overlapping values have been found when initially scanning the dataset\'s indexed values. Not all index collisions carry the same weight when it comes to determining the overall match, but it can provide an early indication of the size of the deduplication job. 
     * @type {number}
     * @memberof MatchJobProgress
     */
    indexCollisionsIdentified?: number;
    /**
     * Provides the amount of index collisions that have been processed thus far. 
     * @type {number}
     * @memberof MatchJobProgress
     */
    indexCollisionsProcessed?: number;
    /**
     * The amount of record pairs that have been identified as candidates for matching. Record pairs are selected based on index collisions. 
     * @type {number}
     * @memberof MatchJobProgress
     */
    pairsIdentified?: number;
    /**
     * The amount of record pairs that have been processed / matched. The outcome of this will be that the `result` fields `pairs_matched` or `pairs_questionable` will be incremented, or the pair will be deemed not a match and therefore not saved as a result. 
     * @type {number}
     * @memberof MatchJobProgress
     */
    pairsProcessed?: number;
}

export function MatchJobProgressFromJSON(json: any): MatchJobProgress {
    return MatchJobProgressFromJSONTyped(json, false);
}

export function MatchJobProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchJobProgress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordsIndexed': !exists(json, 'records_indexed') ? undefined : json['records_indexed'],
        'indexCollisionsIdentified': !exists(json, 'index_collisions_identified') ? undefined : json['index_collisions_identified'],
        'indexCollisionsProcessed': !exists(json, 'index_collisions_processed') ? undefined : json['index_collisions_processed'],
        'pairsIdentified': !exists(json, 'pairs_identified') ? undefined : json['pairs_identified'],
        'pairsProcessed': !exists(json, 'pairs_processed') ? undefined : json['pairs_processed'],
    };
}

export function MatchJobProgressToJSON(value?: MatchJobProgress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records_indexed': value.recordsIndexed,
        'index_collisions_identified': value.indexCollisionsIdentified,
        'index_collisions_processed': value.indexCollisionsProcessed,
        'pairs_identified': value.pairsIdentified,
        'pairs_processed': value.pairsProcessed,
    };
}


