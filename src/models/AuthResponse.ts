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
 * @interface AuthResponse
 */
export interface AuthResponse {
    /**
     * An access token to be provided in requests to the API via the `Authorization` HTTP header. The header value should prefixed with `Bearer` and a single space, so: `Bearer `. 
     * @type {string}
     * @memberof AuthResponse
     */
    accessToken?: string;
    /**
     * A refresh token that can be used to get new access tokens for longer periods of time (up to 7 days). For long-running sessions and clients that want to keep the connection to Confidentify open, we recommend storing refresh tokens instead of other types of credentials. 
     * @type {string}
     * @memberof AuthResponse
     */
    refreshToken?: string;
    /**
     * Indicates whether the user has a registered account or not. If authentication was able to validate user credentials but an account has not been registered for this user, the user will be able to call a limited set of endpoints in order to register an account. 
     * @type {boolean}
     * @memberof AuthResponse
     */
    registered?: boolean;
}

export function AuthResponseFromJSON(json: any): AuthResponse {
    return AuthResponseFromJSONTyped(json, false);
}

export function AuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'refreshToken': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
        'registered': !exists(json, 'registered') ? undefined : json['registered'],
    };
}

export function AuthResponseToJSON(value?: AuthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
        'refresh_token': value.refreshToken,
        'registered': value.registered,
    };
}


