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
import {
    ProcessorOutcome,
    ProcessorOutcomeFromJSON,
    ProcessorOutcomeFromJSONTyped,
    ProcessorOutcomeToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrganizationNameResponseRecord
 */
export interface OrganizationNameResponseRecord {
    /**
     * 
     * @type {string}
     * @memberof OrganizationNameResponseRecord
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationNameResponseRecord
     */
    organizationName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationNameResponseRecord
     */
    organizationType?: string;
    /**
     * 
     * @type {ProcessorOutcome}
     * @memberof OrganizationNameResponseRecord
     */
    outcome?: ProcessorOutcome;
}

export function OrganizationNameResponseRecordFromJSON(json: any): OrganizationNameResponseRecord {
    return OrganizationNameResponseRecordFromJSONTyped(json, false);
}

export function OrganizationNameResponseRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationNameResponseRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'organizationName': !exists(json, 'organization_name') ? undefined : json['organization_name'],
        'organizationType': !exists(json, 'organization_type') ? undefined : json['organization_type'],
        'outcome': !exists(json, 'outcome') ? undefined : ProcessorOutcomeFromJSON(json['outcome']),
    };
}

export function OrganizationNameResponseRecordToJSON(value?: OrganizationNameResponseRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'organization_name': value.organizationName,
        'organization_type': value.organizationType,
        'outcome': ProcessorOutcomeToJSON(value.outcome),
    };
}


