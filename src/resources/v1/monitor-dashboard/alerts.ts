// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 监控大屏数据接口
 */
export class Alerts extends APIResource {
  /**
   * 获取实时告警
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.monitorDashboard.alerts.retrieveRealtime();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveRealtime(
    query: AlertRetrieveRealtimeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/monitor-dashboard/alerts/realtime', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface AlertRetrieveRealtimeParams {
  /**
   * 返回数量限制，默认 10
   */
  limit?: number;
}

export declare namespace Alerts {
  export { type AlertRetrieveRealtimeParams as AlertRetrieveRealtimeParams };
}
