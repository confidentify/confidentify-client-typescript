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


import * as runtime from '../runtime';
import {
    DatasetAll,
    DatasetAllFromJSON,
    DatasetAllToJSON,
    DatasetBase,
    DatasetBaseFromJSON,
    DatasetBaseToJSON,
    DatasetCreateRequest,
    DatasetCreateRequestFromJSON,
    DatasetCreateRequestToJSON,
    DatasetCreateResponse,
    DatasetCreateResponseFromJSON,
    DatasetCreateResponseToJSON,
    DatasetListResponse,
    DatasetListResponseFromJSON,
    DatasetListResponseToJSON,
    DatasetRecordAll,
    DatasetRecordAllFromJSON,
    DatasetRecordAllToJSON,
    DatasetUpdateRequest,
    DatasetUpdateRequestFromJSON,
    DatasetUpdateRequestToJSON,
    IngestDocumentsRequest,
    IngestDocumentsRequestFromJSON,
    IngestDocumentsRequestToJSON,
    IngestFileRequest,
    IngestFileRequestFromJSON,
    IngestFileRequestToJSON,
    IngestFileResponse,
    IngestFileResponseFromJSON,
    IngestFileResponseToJSON,
    RecordsQueryResponse,
    RecordsQueryResponseFromJSON,
    RecordsQueryResponseToJSON,
    RecordsUploadRequest,
    RecordsUploadRequestFromJSON,
    RecordsUploadRequestToJSON,
} from '../models';

export interface DatasetByIdDeleteRequest {
    datasetId: string;
}

export interface DatasetByIdGetRequest {
    datasetId: string;
}

export interface DatasetByIdPostRequest {
    datasetId: string;
    datasetUpdateRequest?: DatasetUpdateRequest;
}

export interface DatasetRecordByIdDeleteRequest {
    datasetId: string;
    recordId: string;
}

export interface DatasetRecordByIdGetRequest {
    datasetId: string;
    recordId: string;
}

export interface DatasetsPostRequest {
    datasetCreateRequest: DatasetCreateRequest;
}

export interface IngestDocumentsPostRequest {
    datasetId: string;
    ingestDocumentsRequest: IngestDocumentsRequest;
}

export interface IngestFilePostRequest {
    datasetId: string;
    ingestFileRequest: IngestFileRequest;
}

export interface RecordsGetRequest {
    datasetId: string;
    pageSize?: number;
    pageAfter?: string;
    filterIds?: string;
}

export interface RecordsPostRequest {
    datasetId: string;
    recordsUploadRequest: RecordsUploadRequest;
}

/**
 * no description
 */
export class DatasetsApi extends runtime.BaseAPI {

    /**
     * Delete dataset
     */
    async datasetByIdDeleteRaw(requestParameters: DatasetByIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling datasetByIdDelete.');
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
            path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete dataset
     */
    async datasetByIdDelete(requestParameters: DatasetByIdDeleteRequest): Promise<void> {
        await this.datasetByIdDeleteRaw(requestParameters);
    }

    /**
     * Get dataset information
     */
    async datasetByIdGetRaw(requestParameters: DatasetByIdGetRequest): Promise<runtime.ApiResponse<DatasetAll>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling datasetByIdGet.');
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
            path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetAllFromJSON(jsonValue));
    }

    /**
     * Get dataset information
     */
    async datasetByIdGet(requestParameters: DatasetByIdGetRequest): Promise<DatasetAll> {
        const response = await this.datasetByIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update dataset
     */
    async datasetByIdPostRaw(requestParameters: DatasetByIdPostRequest): Promise<runtime.ApiResponse<DatasetAll>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling datasetByIdPost.');
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
            path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetUpdateRequestToJSON(requestParameters.datasetUpdateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetAllFromJSON(jsonValue));
    }

    /**
     * Update dataset
     */
    async datasetByIdPost(requestParameters: DatasetByIdPostRequest): Promise<DatasetAll> {
        const response = await this.datasetByIdPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete dataset record
     */
    async datasetRecordByIdDeleteRaw(requestParameters: DatasetRecordByIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling datasetRecordByIdDelete.');
        }

        if (requestParameters.recordId === null || requestParameters.recordId === undefined) {
            throw new runtime.RequiredError('recordId','Required parameter requestParameters.recordId was null or undefined when calling datasetRecordByIdDelete.');
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
            path: `/datasets/{dataset_id}/records/{record_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))).replace(`{${"record_id"}}`, encodeURIComponent(String(requestParameters.recordId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete dataset record
     */
    async datasetRecordByIdDelete(requestParameters: DatasetRecordByIdDeleteRequest): Promise<void> {
        await this.datasetRecordByIdDeleteRaw(requestParameters);
    }

    /**
     * Get dataset record information
     */
    async datasetRecordByIdGetRaw(requestParameters: DatasetRecordByIdGetRequest): Promise<runtime.ApiResponse<DatasetRecordAll>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling datasetRecordByIdGet.');
        }

        if (requestParameters.recordId === null || requestParameters.recordId === undefined) {
            throw new runtime.RequiredError('recordId','Required parameter requestParameters.recordId was null or undefined when calling datasetRecordByIdGet.');
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
            path: `/datasets/{dataset_id}/records/{record_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))).replace(`{${"record_id"}}`, encodeURIComponent(String(requestParameters.recordId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetRecordAllFromJSON(jsonValue));
    }

    /**
     * Get dataset record information
     */
    async datasetRecordByIdGet(requestParameters: DatasetRecordByIdGetRequest): Promise<DatasetRecordAll> {
        const response = await this.datasetRecordByIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get available datasets
     */
    async datasetsGetRaw(): Promise<runtime.ApiResponse<DatasetListResponse>> {
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
            path: `/datasets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetListResponseFromJSON(jsonValue));
    }

    /**
     * Get available datasets
     */
    async datasetsGet(): Promise<DatasetListResponse> {
        const response = await this.datasetsGetRaw();
        return await response.value();
    }

    /**
     * Create dataset
     */
    async datasetsPostRaw(requestParameters: DatasetsPostRequest): Promise<runtime.ApiResponse<DatasetCreateResponse>> {
        if (requestParameters.datasetCreateRequest === null || requestParameters.datasetCreateRequest === undefined) {
            throw new runtime.RequiredError('datasetCreateRequest','Required parameter requestParameters.datasetCreateRequest was null or undefined when calling datasetsPost.');
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
            path: `/datasets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetCreateRequestToJSON(requestParameters.datasetCreateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetCreateResponseFromJSON(jsonValue));
    }

    /**
     * Create dataset
     */
    async datasetsPost(requestParameters: DatasetsPostRequest): Promise<DatasetCreateResponse> {
        const response = await this.datasetsPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Using this endpoint you can initiate data ingestion based on text documents.  Each document will be processed using the `identify` service and the resolved/identified entities will then be added to the dataset as records. 
     * Initiate ingestion of data from a list of documents.
     */
    async ingestDocumentsPostRaw(requestParameters: IngestDocumentsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling ingestDocumentsPost.');
        }

        if (requestParameters.ingestDocumentsRequest === null || requestParameters.ingestDocumentsRequest === undefined) {
            throw new runtime.RequiredError('ingestDocumentsRequest','Required parameter requestParameters.ingestDocumentsRequest was null or undefined when calling ingestDocumentsPost.');
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
            path: `/datasets/{dataset_id}/ingest_documents`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IngestDocumentsRequestToJSON(requestParameters.ingestDocumentsRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Using this endpoint you can initiate data ingestion based on text documents.  Each document will be processed using the `identify` service and the resolved/identified entities will then be added to the dataset as records. 
     * Initiate ingestion of data from a list of documents.
     */
    async ingestDocumentsPost(requestParameters: IngestDocumentsPostRequest): Promise<void> {
        await this.ingestDocumentsPostRaw(requestParameters);
    }

    /**
     * Using this endpoint you can initiate data ingestion based on file upload. This endpoint does not accept the actual file for processing, but will validate the request and provide a presigned URL with which the client can continue.  The uploaded file will be handled according to the `file_type` provided in the request.  In the response of this request, a upload file URL will be provided. The client is expected to `PUT` the file contents towards this URL. Once the file has been uploaded, it will be handled asynchronously. 
     * Initiate ingestion of data from file upload.
     */
    async ingestFilePostRaw(requestParameters: IngestFilePostRequest): Promise<runtime.ApiResponse<IngestFileResponse>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling ingestFilePost.');
        }

        if (requestParameters.ingestFileRequest === null || requestParameters.ingestFileRequest === undefined) {
            throw new runtime.RequiredError('ingestFileRequest','Required parameter requestParameters.ingestFileRequest was null or undefined when calling ingestFilePost.');
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
            path: `/datasets/{dataset_id}/ingest_file`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IngestFileRequestToJSON(requestParameters.ingestFileRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IngestFileResponseFromJSON(jsonValue));
    }

    /**
     * Using this endpoint you can initiate data ingestion based on file upload. This endpoint does not accept the actual file for processing, but will validate the request and provide a presigned URL with which the client can continue.  The uploaded file will be handled according to the `file_type` provided in the request.  In the response of this request, a upload file URL will be provided. The client is expected to `PUT` the file contents towards this URL. Once the file has been uploaded, it will be handled asynchronously. 
     * Initiate ingestion of data from file upload.
     */
    async ingestFilePost(requestParameters: IngestFilePostRequest): Promise<IngestFileResponse> {
        const response = await this.ingestFilePostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Query records
     */
    async recordsGetRaw(requestParameters: RecordsGetRequest): Promise<runtime.ApiResponse<RecordsQueryResponse>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling recordsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.filterIds !== undefined) {
            queryParameters['filter_ids'] = requestParameters.filterIds;
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
            path: `/datasets/{dataset_id}/records`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordsQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query records
     */
    async recordsGet(requestParameters: RecordsGetRequest): Promise<RecordsQueryResponse> {
        const response = await this.recordsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload records
     */
    async recordsPostRaw(requestParameters: RecordsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling recordsPost.');
        }

        if (requestParameters.recordsUploadRequest === null || requestParameters.recordsUploadRequest === undefined) {
            throw new runtime.RequiredError('recordsUploadRequest','Required parameter requestParameters.recordsUploadRequest was null or undefined when calling recordsPost.');
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
            path: `/datasets/{dataset_id}/records`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecordsUploadRequestToJSON(requestParameters.recordsUploadRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload records
     */
    async recordsPost(requestParameters: RecordsPostRequest): Promise<void> {
        await this.recordsPostRaw(requestParameters);
    }

}
