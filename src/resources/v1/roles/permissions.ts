// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 角色CRUD、权限分配、状态管理接口
 */
export class Permissions extends APIResource {
  /**
   * 获取指定角色的权限 ID 列表
   *
   * @example
   * ```ts
   * const permissions = await client.v1.roles.permissions.list(
   *   'id',
   * );
   *
   * const content = await permissions.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/roles/${id}/permissions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 为指定角色分配权限
   *
   * @example
   * ```ts
   * const response = await client.v1.roles.permissions.assign(
   *   'id',
   *   { body: [0] },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  assign(id: string, params: PermissionAssignParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post(path`/api/v1/roles/${id}/permissions`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 移除指定角色的权限
   *
   * @example
   * ```ts
   * const permission = await client.v1.roles.permissions.remove(
   *   'id',
   *   { body: [0] },
   * );
   *
   * const content = await permission.blob();
   * console.log(content);
   * ```
   */
  remove(id: string, params: PermissionRemoveParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.delete(path`/api/v1/roles/${id}/permissions`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PermissionAssignParams {
  body: Array<number>;
}

export interface PermissionRemoveParams {
  body: Array<number>;
}

export declare namespace Permissions {
  export {
    type PermissionAssignParams as PermissionAssignParams,
    type PermissionRemoveParams as PermissionRemoveParams,
  };
}
