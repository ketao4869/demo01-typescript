// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 人社单位树型结构查询接口
 */
export class Tree extends APIResource {
  /**
   * 获取所有人社单位的树型结构
   *
   * @example
   * ```ts
   * const trees = await client.v1.hrOrganizations.tree.list();
   *
   * const content = await trees.blob();
   * console.log(content);
   * ```
   */
  list(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/hr-organizations/tree', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取启用状态的人社单位树型结构
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.hrOrganizations.tree.retrieveEnabled();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveEnabled(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/hr-organizations/tree/enabled', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
