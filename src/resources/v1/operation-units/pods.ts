// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 运营单位的增删改查接口
 */
export class Pods extends APIResource {
  /**
   * 为运营单位分配实训舱
   *
   * @example
   * ```ts
   * const pod = await client.v1.operationUnits.pods.create(
   *   'id',
   *   { body: [0] },
   * );
   *
   * const content = await pod.blob();
   * console.log(content);
   * ```
   */
  create(id: string, params: PodCreateParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post(path`/api/v1/operation-units/${id}/pods`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取指定运营单位下的实训舱列表
   *
   * @example
   * ```ts
   * const pods = await client.v1.operationUnits.pods.list('id');
   *
   * const content = await pods.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/operation-units/${id}/pods`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PodCreateParams {
  body: Array<number>;
}

export declare namespace Pods {
  export { type PodCreateParams as PodCreateParams };
}
