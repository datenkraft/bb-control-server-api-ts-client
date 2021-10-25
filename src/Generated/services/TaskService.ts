/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { taskResource } from '../models/taskResource';
import type { taskResourceCollection } from '../models/taskResourceCollection';
import type { updateTaskResource } from '../models/updateTaskResource';
import { request as __request } from '../core/request';

export class TaskService {

    /**
     * Get tasks
     * Get tasks
     * @param filterProjectId Task projectId filter
     * @param filterTaskType Task taskType filter
     * @param filterNotBefore Task notBefore filter
     * @param filterTaskStatus Task taskStatus filter
     * @returns taskResourceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getTaskCollection(
        filterProjectId?: string,
        filterTaskType?: string,
        filterNotBefore?: string,
        filterTaskStatus?: Array<string>,
    ): Promise<taskResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/task`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[taskType]': filterTaskType,
                'filter[notBefore]': filterNotBefore,
                'filter[taskStatus]': filterTaskStatus,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update a Task
     * Update one or more fields of a Task
     * @param taskId Task Id
     * @param requestBody
     * @returns taskResource OK
     * @throws ApiError
     */
    public static async patchTask(
        taskId: string,
        requestBody: updateTaskResource,
    ): Promise<taskResource> {
        const result = await __request({
            method: 'PATCH',
            path: `/task/${taskId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}