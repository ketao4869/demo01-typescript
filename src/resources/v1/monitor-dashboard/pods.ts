// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 监控大屏数据接口
 */
export class Pods extends APIResource {
  /**
   * 获取实训舱状态列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.monitorDashboard.pods.retrieveStatus();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStatus(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/monitor-dashboard/pods/status', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}
