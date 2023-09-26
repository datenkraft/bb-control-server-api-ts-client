/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type taskTemplateResource = {
    /**
     * Task Template Id
     */
    taskTemplateId: string;
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
     * Params Template
     */
    paramsTemplate: any;
    /**
     * Schedule
     */
    schedule: string;
    /**
     * Active
     */
    active: boolean;
    /**
     * Last Start Date
     */
    lastStartDate: string;
}
