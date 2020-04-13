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

/**
 * Property types in a dataset schema:  * `string` - A generic text string.  * `integer` - A generic integer.  * `array` - An array of items. The `items` property must also be provided.     Multiple layers of arrays are not supported.  * `person_name` - The name of a person.     Values for this property type can either be provided as a string containing     the full name, or can be provided as an object of the `PersonName_Base` type.  * `job_title` - A job title. Values for this property must be provided as strings.  * `organization_name` - The name of an organization.     Values for this property must be provided as strings.  * `email` - An email address.  * `phone` - A phone number.  * `country` - A country name or code. The 2-letter country code is preferred.  * `birth_date` - A birth date, or alternatively just a birth year.     Values for this property must be provided as strings, preferably in the     `yyyy-MM-dd` date format (but other common date formats will be attempted too).  * `national_id` - A national (or otherwise official) identification number.     This could be used for instance of passport numbers or driver\'s license numbers.     Values for this property can be provided as a string containing the full     national ID, or as an object containing a `country` and a `id` property.  * `meta_record_source` - The record\'s originating system, repository or document.  * `meta_external_id` - The record\'s ID in an external system.  * `meta_record_group` - A record group, typically used when grouping records in     deduplication scenarios. 
 * @export
 * @enum {string}
 */
export enum DatasetSchemaPropertyType {
    String = 'string',
    Integer = 'integer',
    Array = 'array',
    PersonName = 'person_name',
    Email = 'email',
    Phone = 'phone',
    Country = 'country',
    BirthDate = 'birth_date',
    NationalId = 'national_id',
    MetaRecordSource = 'meta_record_source',
    MetaExternalId = 'meta_external_id',
    MetaRecordGroup = 'meta_record_group'
}

export function DatasetSchemaPropertyTypeFromJSON(json: any): DatasetSchemaPropertyType {
    return DatasetSchemaPropertyTypeFromJSONTyped(json, false);
}

export function DatasetSchemaPropertyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetSchemaPropertyType {
    return json as DatasetSchemaPropertyType;
}

export function DatasetSchemaPropertyTypeToJSON(value?: DatasetSchemaPropertyType | null): any {
    return value as any;
}

