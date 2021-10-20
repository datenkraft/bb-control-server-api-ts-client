/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { taskResource } from '../models/taskResource';
import type { taskTemplateResourceCollection } from '../models/taskTemplateResourceCollection';
import type { taskTemplateTaskResource } from '../models/taskTemplateTaskResource';
import { request as __request } from '../core/request';

export class TaskTemplateService {

    /**
     * Get task templates
     * Get task templates
     * @returns taskTemplateResourceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getTaskTemplateCollection(): Promise<taskTemplateResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/task-template`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Generate a task with a task template id
     * Generate a task with a task template id
     * @param taskTemplateId Task Template Id
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns taskResource created
     * @throws ApiError
     */
    public static async postTaskTemplateTask(
        taskTemplateId: string,
        requestBody: taskTemplateTaskResource,
    ): Promise<errorResponse | taskResource> {
        const result = await __request({
            method: 'POST',
            path: `/task-template/${taskTemplateId}/task`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}