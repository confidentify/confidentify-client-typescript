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
 * Request format used to process a name in parts
 * @export
 * @interface PersonNameDetailsRequestRecord
 */
export interface PersonNameDetailsRequestRecord {
    /**
     * 
     * @type {string}
     * @memberof PersonNameDetailsRequestRecord
     */
    id?: string;
    /**
     * The given name (aka. first name in western naming culture)
     * @type {string}
     * @memberof PersonNameDetailsRequestRecord
     */
    given?: string;
    /**
     * The middle name, if available
     * @type {string}
     * @memberof PersonNameDetailsRequestRecord
     */
    middle?: string;
    /**
     * The family name (aka. last name of surname in western naming culture)
     * @type {string}
     * @memberof PersonNameDetailsRequestRecord
     */
    family?: string;
    /**
     * The name suffix, if available
     * @type {string}
     * @memberof PersonNameDetailsRequestRecord
     */
    suffix?: string;
}

export function PersonNameDetailsRequestRecordFromJSON(json: any): PersonNameDetailsRequestRecord {
    return PersonNameDetailsRequestRecordFromJSONTyped(json, false);
}

export function PersonNameDetailsRequestRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameDetailsRequestRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'given': !exists(json, 'given') ? undefined : json['given'],
        'middle': !exists(json, 'middle') ? undefined : json['middle'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
    };
}

export function PersonNameDetailsRequestRecordToJSON(value?: PersonNameDetailsRequestRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'given': value.given,
        'middle': value.middle,
        'family': value.family,
        'suffix': value.suffix,
    };
}


