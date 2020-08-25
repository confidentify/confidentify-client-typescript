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
 * @interface AuthRequest
 */
export interface AuthRequest {
    /**
     * The type of grant provided, if the endpoint is used as per the OAuth2 protocol.
     * @type {string}
     * @memberof AuthRequest
     */
    grantType?: AuthRequestGrantTypeEnum;
    /**
     * The username of the user, usually an email address.
     * @type {string}
     * @memberof AuthRequest
     */
    username?: string;
    /**
     * Password to use for authentication.
     * @type {string}
     * @memberof AuthRequest
     */
    password?: string;
    /**
     * A previously issued `refresh_token` value to provide for authentication.
     * @type {string}
     * @memberof AuthRequest
     */
    refreshToken?: string;
    /**
     * Access token issued by Google to use for authentication.
     * @type {string}
     * @memberof AuthRequest
     */
    googleAccessToken?: string;
    /**
     * Client identifier as per the OAuth2 protocol.
     * @type {string}
     * @memberof AuthRequest
     */
    clientId?: string;
    /**
     * Client secret as per the OAuth2 protocol.
     * @type {string}
     * @memberof AuthRequest
     */
    clientSecret?: string;
    /**
     * Client redirect_url as per the OAuth2 protocol.
     * @type {string}
     * @memberof AuthRequest
     */
    redirectUrl?: string;
    /**
     * The authorization code, if `grant_type` is `authorization_code`. Use the `/auth/authorization_code` endpoint to generate this code and the URL which acts as a OAuth2 handshake for it. 
     * @type {string}
     * @memberof AuthRequest
     */
    code?: string;
    /**
     * Optional property specifying the number of seconds that the returned token should be valid for. 
     * @type {number}
     * @memberof AuthRequest
     */
    expireAfterSeconds?: number;
    /**
     * An optional array of service names to grant access to. Use this to generate access tokens with limited capabilities. 
     * @type {Array<string>}
     * @memberof AuthRequest
     */
    serviceGrants?: Array<string>;
}

export function AuthRequestFromJSON(json: any): AuthRequest {
    return AuthRequestFromJSONTyped(json, false);
}

export function AuthRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grantType': !exists(json, 'grant_type') ? undefined : json['grant_type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'refreshToken': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
        'googleAccessToken': !exists(json, 'google_access_token') ? undefined : json['google_access_token'],
        'clientId': !exists(json, 'client_id') ? undefined : json['client_id'],
        'clientSecret': !exists(json, 'client_secret') ? undefined : json['client_secret'],
        'redirectUrl': !exists(json, 'redirect_url') ? undefined : json['redirect_url'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'expireAfterSeconds': !exists(json, 'expire_after_seconds') ? undefined : json['expire_after_seconds'],
        'serviceGrants': !exists(json, 'service_grants') ? undefined : json['service_grants'],
    };
}

export function AuthRequestToJSON(value?: AuthRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grant_type': value.grantType,
        'username': value.username,
        'password': value.password,
        'refresh_token': value.refreshToken,
        'google_access_token': value.googleAccessToken,
        'client_id': value.clientId,
        'client_secret': value.clientSecret,
        'redirect_url': value.redirectUrl,
        'code': value.code,
        'expire_after_seconds': value.expireAfterSeconds,
        'service_grants': value.serviceGrants,
    };
}

/**
* @export
* @enum {string}
*/
export enum AuthRequestGrantTypeEnum {
    Password = 'password',
    AuthorizationCode = 'authorization_code',
    RefreshToken = 'refresh_token',
    GoogleAccessToken = 'google_access_token'
}


