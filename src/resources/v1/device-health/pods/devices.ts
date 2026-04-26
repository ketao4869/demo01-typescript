// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 设备健康状态监控接口
 */
export class Devices extends APIResource {
  /**
   * 获取实训舱所有设备状态
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.deviceHealth.pods.devices.retrieveStatus(
   *     0,
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStatus(podID: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/device-health/pods/${podID}/devices/status`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}
