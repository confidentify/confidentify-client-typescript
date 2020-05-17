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
import {
    PersonNameAllAllOf,
    PersonNameAllAllOfFromJSON,
    PersonNameAllAllOfFromJSONTyped,
    PersonNameAllAllOfToJSON,
    PersonNameBase,
    PersonNameBaseFromJSON,
    PersonNameBaseFromJSONTyped,
    PersonNameBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface PersonNameAll
 */
export interface PersonNameAll {
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    given?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    middle?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    family?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    suffix?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    familyPrefix?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonNameAll
     */
    familyMain?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PersonNameAll
     */
    nicknames?: Array<string>;
}

export function PersonNameAllFromJSON(json: any): PersonNameAll {
    return PersonNameAllFromJSONTyped(json, false);
}

export function PersonNameAllFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameAll {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'given': !exists(json, 'given') ? undefined : json['given'],
        'middle': !exists(json, 'middle') ? undefined : json['middle'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
        'familyPrefix': !exists(json, 'family_prefix') ? undefined : json['family_prefix'],
        'familyMain': !exists(json, 'family_main') ? undefined : json['family_main'],
        'nicknames': !exists(json, 'nicknames') ? undefined : json['nicknames'],
    };
}

export function PersonNameAllToJSON(value?: PersonNameAll | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'given': value.given,
        'middle': value.middle,
        'family': value.family,
        'suffix': value.suffix,
        'family_prefix': value.familyPrefix,
        'family_main': value.familyMain,
        'nicknames': value.nicknames,
    };
}


