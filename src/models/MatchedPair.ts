/* tslint:disable */
/* eslint-disable */
/**
 * Confidentify API
 * Services that let you build confidence and identify matches in customer data. ## Features overview * Contact data processing services (tagged with `process`) which offer   validation and enrichment backed by inference and knowledge on complex   data types such as names, email addresses, phone numbers.  * Data matching and searching services (tagged with `matching`) that    allow you to identify duplicated data or matches against third party   contact data list.  * Dataset management services (tagged with `dataset`) that allow record storage and retrieval. ## Integrator notes: * Use the `/auth` endpoint to get an access token. Access tokens are temporary, so design the client the be capable of renewing it. * The APIs are rate-limited, so design the client to be capable of retrying with some delay upon HTTP 429 responses. 
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MatchVerdict,
    MatchVerdictFromJSON,
    MatchVerdictFromJSONTyped,
    MatchVerdictToJSON,
    MatchedRecord,
    MatchedRecordFromJSON,
    MatchedRecordFromJSONTyped,
    MatchedRecordToJSON,
} from './';

/**
 * 
 * @export
 * @interface MatchedPair
 */
export interface MatchedPair {
    /**
     * 
     * @type {MatchedRecord}
     * @memberof MatchedPair
     */
    record1?: MatchedRecord;
    /**
     * 
     * @type {MatchedRecord}
     * @memberof MatchedPair
     */
    record2?: MatchedRecord;
    /**
     * 
     * @type {MatchVerdict}
     * @memberof MatchedPair
     */
    verdict?: MatchVerdict;
    /**
     * Detailed score values for information
     * @type {object}
     * @memberof MatchedPair
     */
    scores?: object;
}

export function MatchedPairFromJSON(json: any): MatchedPair {
    return MatchedPairFromJSONTyped(json, false);
}

export function MatchedPairFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchedPair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'record1': !exists(json, 'record1') ? undefined : MatchedRecordFromJSON(json['record1']),
        'record2': !exists(json, 'record2') ? undefined : MatchedRecordFromJSON(json['record2']),
        'verdict': !exists(json, 'verdict') ? undefined : MatchVerdictFromJSON(json['verdict']),
        'scores': !exists(json, 'scores') ? undefined : json['scores'],
    };
}

export function MatchedPairToJSON(value?: MatchedPair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'record1': MatchedRecordToJSON(value.record1),
        'record2': MatchedRecordToJSON(value.record2),
        'verdict': MatchVerdictToJSON(value.verdict),
        'scores': value.scores,
    };
}


