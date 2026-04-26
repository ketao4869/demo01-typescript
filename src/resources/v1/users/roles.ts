// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 用户注册和信息管理接口
 */
export class Roles extends APIResource {
  /**
   * 根据用户 ID 获取其拥有的角色列表
   *
   * @example
   * ```ts
   * const roles = await client.v1.users.roles.list('id');
   *
   * const content = await roles.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/users/${id}/roles`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 为指定用户分配角色，覆盖原有角色
   *
   * @example
   * ```ts
   * const response = await client.v1.users.roles.assign('id', {
   *   body: [0],
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  assign(id: string, params: RoleAssignParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params
    return this._client.put(path`/api/v1/users/${id}/roles`, { body: body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface RoleAssignParams {
  body: Array<number>;
}

export declare namespace Roles {
  export {
    type RoleAssignParams as RoleAssignParams
  };
}
