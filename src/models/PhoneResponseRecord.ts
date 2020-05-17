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
    PhoneResponseRecordProcessorOutcome,
    PhoneResponseRecordProcessorOutcomeFromJSON,
    PhoneResponseRecordProcessorOutcomeFromJSONTyped,
    PhoneResponseRecordProcessorOutcomeToJSON,
} from './';

/**
 * 
 * @export
 * @interface PhoneResponseRecord
 */
export interface PhoneResponseRecord {
    /**
     * 
     * @type {string}
     * @memberof PhoneResponseRecord
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneResponseRecord
     */
    phoneE164?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneResponseRecord
     */
    phoneInternational?: string;
    /**
     * 
     * @type {number}
     * @memberof PhoneResponseRecord
     */
    phoneCountryCode?: number;
    /**
     * 
     * @type {string}
     * @memberof PhoneResponseRecord
     */
    phoneNational?: string;
    /**
     * 
     * @type {PhoneResponseRecordProcessorOutcome}
     * @memberof PhoneResponseRecord
     */
    outcome?: PhoneResponseRecordProcessorOutcome;
}

export function PhoneResponseRecordFromJSON(json: any): PhoneResponseRecord {
    return PhoneResponseRecordFromJSONTyped(json, false);
}

export function PhoneResponseRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneResponseRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'phoneE164': !exists(json, 'phone_E164') ? undefined : json['phone_E164'],
        'phoneInternational': !exists(json, 'phone_international') ? undefined : json['phone_international'],
        'phoneCountryCode': !exists(json, 'phone_country_code') ? undefined : json['phone_country_code'],
        'phoneNational': !exists(json, 'phone_national') ? undefined : json['phone_national'],
        'outcome': !exists(json, 'outcome') ? undefined : PhoneResponseRecordProcessorOutcomeFromJSON(json['outcome']),
    };
}

export function PhoneResponseRecordToJSON(value?: PhoneResponseRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'phone_E164': value.phoneE164,
        'phone_international': value.phoneInternational,
        'phone_country_code': value.phoneCountryCode,
        'phone_national': value.phoneNational,
        'outcome': PhoneResponseRecordProcessorOutcomeToJSON(value.outcome),
    };
}


