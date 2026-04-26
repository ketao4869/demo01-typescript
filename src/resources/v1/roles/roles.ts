// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PermissionsAPI from './permissions';
import { PermissionAssignParams, PermissionRemoveParams, Permissions } from './permissions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 角色CRUD、权限分配、状态管理接口
 */
export class Roles extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * 创建新的系统角色
   *
   * @example
   * ```ts
   * const role = await client.v1.roles.create({
   *   roleCode: 'OPERATION_ADMIN',
   *   roleName: '运营管理员',
   * });
   *
   * const content = await role.blob();
   * console.log(content);
   * ```
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/roles', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据角色 ID 查询角色详细信息
   *
   * @example
   * ```ts
   * const role = await client.v1.roles.retrieve('id');
   *
   * const content = await role.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/roles/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新角色信息
   *
   * @example
   * ```ts
   * const role = await client.v1.roles.update('id');
   *
   * const content = await role.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: RoleUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/roles/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询角色列表，page 从 1 开始，size 范围 1–100
   *
   * @example
   * ```ts
   * const roles = await client.v1.roles.list();
   *
   * const content = await roles.blob();
   * console.log(content);
   * ```
   */
  list(query: RoleListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/roles', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除指定角色
   *
   * @example
   * ```ts
   * const role = await client.v1.roles.delete('id');
   *
   * const content = await role.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/roles/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 禁用指定角色
   *
   * @example
   * ```ts
   * const response = await client.v1.roles.disable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/roles/${id}/disable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 启用指定角色
   *
   * @example
   * ```ts
   * const response = await client.v1.roles.enable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  enable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/roles/${id}/enable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface RoleCreateParams {
  /**
   * 角色编码
   */
  roleCode: string;

  /**
   * 角色名称
   */
  roleName: string;

  /**
   * 角色描述
   */
  roleDesc?: string | null;
}

export interface RoleUpdateParams {
  /**
   * 角色描述
   */
  roleDesc?: string | null;

  /**
   * 角色名称
   */
  roleName?: string | null;
}

export interface RoleListParams {
  page?: number;

  size?: number;
}

Roles.Permissions = Permissions;

export declare namespace Roles {
  export {
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams
  };

  export {
    Permissions as Permissions,
    type PermissionAssignParams as PermissionAssignParams,
    type PermissionRemoveParams as PermissionRemoveParams
  };
}
