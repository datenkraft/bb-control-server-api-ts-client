/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { OpenAPI } from './core/OpenAPI';

export type { authPermissionResource } from './models/authPermissionResource';
export type { authRoleCollection } from './models/authRoleCollection';
export type { authRoleIdentityCollection } from './models/authRoleIdentityCollection';
export type { authRoleIdentityResource } from './models/authRoleIdentityResource';
export type { authRoleResource } from './models/authRoleResource';
export type { error } from './models/error';
export type { errorResponse } from './models/errorResponse';
export type { getAuthPermissionCollectionResponse } from './models/getAuthPermissionCollectionResponse';
export type { taskResource } from './models/taskResource';
export type { taskResourceCollection } from './models/taskResourceCollection';
export type { taskTemplateResource } from './models/taskTemplateResource';
export type { taskTemplateResourceCollection } from './models/taskTemplateResourceCollection';
export type { taskTemplateTaskResource } from './models/taskTemplateTaskResource';
export type { updateTaskResource } from './models/updateTaskResource';

export { AuthRoleIdentityService } from './services/AuthRoleIdentityService';
export { AuthRoleService } from './services/AuthRoleService';
export { DocsService } from './services/DocsService';
export { TaskService } from './services/TaskService';
export { TaskTemplateService } from './services/TaskTemplateService';
