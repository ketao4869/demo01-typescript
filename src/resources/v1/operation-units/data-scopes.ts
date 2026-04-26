// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 运营单位的增删改查接口
 */
export class DataScopes extends APIResource {
  /**
   * 为运营单位设置数据权限范围
   *
   * @example
   * ```ts
   * const dataScope =
   *   await client.v1.operationUnits.dataScopes.create('id', {
   *     body: [{ resourceType: 'POD', scopeType: 2 }],
   *   });
   *
   * const content = await dataScope.blob();
   * console.log(content);
   * ```
   */
  create(id: string, params: DataScopeCreateParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params
    return this._client.post(path`/api/v1/operation-units/${id}/data-scopes`, { body: body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取指定运营单位的数据权限配置
   *
   * @example
   * ```ts
   * const dataScopes =
   *   await client.v1.operationUnits.dataScopes.list('id');
   *
   * const content = await dataScopes.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/operation-units/${id}/data-scopes`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface DataScopeCreateParams {
  body: Array<DataScopeCreateParams.Body>;
}

export namespace DataScopeCreateParams {
  /**
   * 数据权限范围设置请求
   */
  export interface Body {
    /**
     * 资源类型
     */
    resourceType: string;

    /**
     * 范围类型（1：全部数据，2：本单位数据，3：本部门数据，4：仅本人数据）
     */
    scopeType: number;
  }
}

export declare namespace DataScopes {
  export {
    type DataScopeCreateParams as DataScopeCreateParams
  };
}
