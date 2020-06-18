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
 * @interface MatchJobCreateRequest
 */
export interface MatchJobCreateRequest {
    /**
     * The IDs of the datasets to match
     * @type {Array<string>}
     * @memberof MatchJobCreateRequest
     */
    datasets?: Array<string>;
    /**
     * An optional name for the job 
     * @type {string}
     * @memberof MatchJobCreateRequest
     */
    name?: string;
}

export function MatchJobCreateRequestFromJSON(json: any): MatchJobCreateRequest {
    return MatchJobCreateRequestFromJSONTyped(json, false);
}

export function MatchJobCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchJobCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datasets': !exists(json, 'datasets') ? undefined : json['datasets'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function MatchJobCreateRequestToJSON(value?: MatchJobCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datasets': value.datasets,
        'name': value.name,
    };
}


