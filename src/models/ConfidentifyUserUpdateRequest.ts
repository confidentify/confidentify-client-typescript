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
 * @interface ConfidentifyUserUpdateRequest
 */
export interface ConfidentifyUserUpdateRequest {
    /**
     * The user\'s name
     * @type {string}
     * @memberof ConfidentifyUserUpdateRequest
     */
    name?: string;
    /**
     * The user\'s profile image
     * @type {string}
     * @memberof ConfidentifyUserUpdateRequest
     */
    imageUrl?: string;
    /**
     * The user\'s email
     * @type {string}
     * @memberof ConfidentifyUserUpdateRequest
     */
    email?: string;
    /**
     * A new password for the user
     * @type {string}
     * @memberof ConfidentifyUserUpdateRequest
     */
    password?: string;
}

export function ConfidentifyUserUpdateRequestFromJSON(json: any): ConfidentifyUserUpdateRequest {
    return ConfidentifyUserUpdateRequestFromJSONTyped(json, false);
}

export function ConfidentifyUserUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfidentifyUserUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function ConfidentifyUserUpdateRequestToJSON(value?: ConfidentifyUserUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'image_url': value.imageUrl,
        'email': value.email,
        'password': value.password,
    };
}


