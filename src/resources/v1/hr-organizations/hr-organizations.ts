// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TreeAPI from './tree';
import { Tree } from './tree';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 人社单位树型结构查询接口
 */
export class HrOrganizations extends APIResource {
  tree: TreeAPI.Tree = new TreeAPI.Tree(this._client);

  /**
   * 根据人社单位 ID 查询单位详细信息
   *
   * @example
   * ```ts
   * const hrOrganization =
   *   await client.v1.hrOrganizations.retrieve('id');
   *
   * const content = await hrOrganization.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/hr-organizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取所有人社单位的平铺列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.hrOrganizations.retrieveHrOrganizations();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveHrOrganizations(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/hr-organizations', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

HrOrganizations.Tree = Tree;

export declare namespace HrOrganizations {
  export { Tree as Tree };
}
