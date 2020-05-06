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


import * as runtime from '../runtime';
import {
    DedupJobAll,
    DedupJobAllFromJSON,
    DedupJobAllToJSON,
    DedupJobCreateRequest,
    DedupJobCreateRequestFromJSON,
    DedupJobCreateRequestToJSON,
    DedupJobPairsQueryResponse,
    DedupJobPairsQueryResponseFromJSON,
    DedupJobPairsQueryResponseToJSON,
    DedupJobsQueryResponse,
    DedupJobsQueryResponseFromJSON,
    DedupJobsQueryResponseToJSON,
    MatchVerdict,
    MatchVerdictFromJSON,
    MatchVerdictToJSON,
} from '../models';

export interface DedupJobByIdDeleteRequest {
    jobId: string;
}

export interface DedupJobByIdGetRequest {
    jobId: string;
}

export interface DedupJobByIdPairsGetRequest {
    jobId: string;
    filterVerdict?: MatchVerdict;
    filterRecordId?: string;
    pageSize?: number;
    pageAfter?: string;
}

export interface DedupJobsGetRequest {
    filterDatasetId?: string;
    pageSize?: number;
    pageAfter?: string;
}

export interface DedupJobsPostRequest {
    dedupJobCreateRequest: DedupJobCreateRequest;
}

/**
 * no description
 */
export class MatchingApi extends runtime.BaseAPI {

    /**
     * Delete deduplication job
     */
    async dedupJobByIdDeleteRaw(requestParameters: DedupJobByIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling dedupJobByIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/dedup/jobs/{job_id}`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete deduplication job
     */
    async dedupJobByIdDelete(requestParameters: DedupJobByIdDeleteRequest): Promise<void> {
        await this.dedupJobByIdDeleteRaw(requestParameters);
    }

    /**
     * Get deduplication job information
     */
    async dedupJobByIdGetRaw(requestParameters: DedupJobByIdGetRequest): Promise<runtime.ApiResponse<DedupJobAll>> {
        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling dedupJobByIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/dedup/jobs/{job_id}`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DedupJobAllFromJSON(jsonValue));
    }

    /**
     * Get deduplication job information
     */
    async dedupJobByIdGet(requestParameters: DedupJobByIdGetRequest): Promise<DedupJobAll> {
        const response = await this.dedupJobByIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get record pairs found by deduplication job
     */
    async dedupJobByIdPairsGetRaw(requestParameters: DedupJobByIdPairsGetRequest): Promise<runtime.ApiResponse<DedupJobPairsQueryResponse>> {
        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling dedupJobByIdPairsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filterVerdict !== undefined) {
            queryParameters['filter_verdict'] = requestParameters.filterVerdict;
        }

        if (requestParameters.filterRecordId !== undefined) {
            queryParameters['filter_record_id'] = requestParameters.filterRecordId;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/dedup/jobs/{job_id}/pairs`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DedupJobPairsQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get record pairs found by deduplication job
     */
    async dedupJobByIdPairsGet(requestParameters: DedupJobByIdPairsGetRequest): Promise<DedupJobPairsQueryResponse> {
        const response = await this.dedupJobByIdPairsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get deduplication jobs
     */
    async dedupJobsGetRaw(requestParameters: DedupJobsGetRequest): Promise<runtime.ApiResponse<DedupJobsQueryResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filterDatasetId !== undefined) {
            queryParameters['filter_dataset_id'] = requestParameters.filterDatasetId;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/dedup/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DedupJobsQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get deduplication jobs
     */
    async dedupJobsGet(requestParameters: DedupJobsGetRequest): Promise<DedupJobsQueryResponse> {
        const response = await this.dedupJobsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create deduplication job
     */
    async dedupJobsPostRaw(requestParameters: DedupJobsPostRequest): Promise<runtime.ApiResponse<DedupJobAll>> {
        if (requestParameters.dedupJobCreateRequest === null || requestParameters.dedupJobCreateRequest === undefined) {
            throw new runtime.RequiredError('dedupJobCreateRequest','Required parameter requestParameters.dedupJobCreateRequest was null or undefined when calling dedupJobsPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/dedup/jobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DedupJobCreateRequestToJSON(requestParameters.dedupJobCreateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DedupJobAllFromJSON(jsonValue));
    }

    /**
     * Create deduplication job
     */
    async dedupJobsPost(requestParameters: DedupJobsPostRequest): Promise<DedupJobAll> {
        const response = await this.dedupJobsPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search for matching person records in one or more datasets.
     */
    async matchPersonPostRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("oAuth2ClientCredentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/match/person`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Search for matching person records in one or more datasets.
     */
    async matchPersonPost(): Promise<void> {
        await this.matchPersonPostRaw();
    }

}
