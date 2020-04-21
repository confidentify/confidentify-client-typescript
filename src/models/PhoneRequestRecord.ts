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
/**
 * 
 * @export
 * @interface PhoneRequestRecord
 */
export interface PhoneRequestRecord {
    /**
     * 
     * @type {string}
     * @memberof PhoneRequestRecord
     */
    id?: string;
    /**
     * 2-letter country code
     * @type {string}
     * @memberof PhoneRequestRecord
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneRequestRecord
     */
    phone?: string;
}

export function PhoneRequestRecordFromJSON(json: any): PhoneRequestRecord {
    return PhoneRequestRecordFromJSONTyped(json, false);
}

export function PhoneRequestRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneRequestRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
    };
}

export function PhoneRequestRecordToJSON(value?: PhoneRequestRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'country': value.country,
        'phone': value.phone,
    };
}


