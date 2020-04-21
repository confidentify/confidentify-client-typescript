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
    EmailResponseRecord,
    EmailResponseRecordFromJSON,
    EmailResponseRecordFromJSONTyped,
    EmailResponseRecordToJSON,
} from './';

/**
 * 
 * @export
 * @interface EmailResponse
 */
export interface EmailResponse {
    /**
     * 
     * @type {Array<EmailResponseRecord>}
     * @memberof EmailResponse
     */
    records?: Array<EmailResponseRecord>;
}

export function EmailResponseFromJSON(json: any): EmailResponse {
    return EmailResponseFromJSONTyped(json, false);
}

export function EmailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'records': !exists(json, 'records') ? undefined : ((json['records'] as Array<any>).map(EmailResponseRecordFromJSON)),
    };
}

export function EmailResponseToJSON(value?: EmailResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records': value.records === undefined ? undefined : ((value.records as Array<any>).map(EmailResponseRecordToJSON)),
    };
}


