// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 课程的增删改查接口
 */
export class Pods extends APIResource {
  /**
   * 获取课程绑定的实训舱
   *
   * @example
   * ```ts
   * const pods = await client.v1.courses.pods.list('id');
   *
   * const content = await pods.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/courses/${id}/pods`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 绑定实训舱
   *
   * @example
   * ```ts
   * const response = await client.v1.courses.pods.bind('id', {
   *   body: [0],
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  bind(id: string, params: PodBindParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post(path`/api/v1/courses/${id}/pods`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PodBindParams {
  body: Array<number>;
}

export declare namespace Pods {
  export { type PodBindParams as PodBindParams };
}
