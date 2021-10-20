/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type taskResource = {
    /**
     * Task Id
     */
    taskId: string;
    /**
     * Identity Id
     */
    identityId: string;
    /**
     * Project Id
     */
    projectId?: string | null;
    /**
     * Task Type
     */
    taskType: string;
    /**
     * Task Status
     */
    taskStatus: string;
    /**
     * Params
     */
    params?: any;
    /**
     * NotBefore
     */
    notBefore?: string;
}
