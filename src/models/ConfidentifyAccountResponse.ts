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
 * @interface ConfidentifyAccountResponse
 */
export interface ConfidentifyAccountResponse {
    /**
     * A unique ID for the account. 
     * @type {string}
     * @memberof ConfidentifyAccountResponse
     */
    id?: string;
    /**
     * The username of the account owner user.
     * @type {string}
     * @memberof ConfidentifyAccountResponse
     */
    accountOwnerUsername?: string;
    /**
     * The name of the account, typically a company name. 
     * @type {string}
     * @memberof ConfidentifyAccountResponse
     */
    name?: string;
    /**
     * Optional URL to an image representing the account.
     * @type {string}
     * @memberof ConfidentifyAccountResponse
     */
    imageUrl?: string;
    /**
     * Optional URL to the account\'s website.
     * @type {string}
     * @memberof ConfidentifyAccountResponse
     */
    websiteUrl?: string;
}

export function ConfidentifyAccountResponseFromJSON(json: any): ConfidentifyAccountResponse {
    return ConfidentifyAccountResponseFromJSONTyped(json, false);
}

export function ConfidentifyAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfidentifyAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'accountOwnerUsername': !exists(json, 'account_owner_username') ? undefined : json['account_owner_username'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'websiteUrl': !exists(json, 'website_url') ? undefined : json['website_url'],
    };
}

export function ConfidentifyAccountResponseToJSON(value?: ConfidentifyAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'account_owner_username': value.accountOwnerUsername,
        'name': value.name,
        'image_url': value.imageUrl,
        'website_url': value.websiteUrl,
    };
}


