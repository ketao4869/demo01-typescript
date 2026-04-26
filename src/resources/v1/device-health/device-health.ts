// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DevicesAPI from './devices';
import { Devices } from './devices';
import * as PodsAPI from './pods/pods';
import { Pods } from './pods/pods';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 设备健康状态监控接口
 */
export class DeviceHealth extends APIResource {
  pods: PodsAPI.Pods = new PodsAPI.Pods(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);

  /**
   * 获取设备健康统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.deviceHealth.retrieveStatistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStatistics(query: DeviceHealthRetrieveStatisticsParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/device-health/statistics', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface DeviceHealthRetrieveStatisticsParams {
  /**
   * 实训舱 ID（可选，不传则统计全部）
   */
  podId?: number;
}

DeviceHealth.Pods = Pods;
DeviceHealth.Devices = Devices;

export declare namespace DeviceHealth {
  export {
    type DeviceHealthRetrieveStatisticsParams as DeviceHealthRetrieveStatisticsParams
  };

  export {
    Pods as Pods
  };

  export {
    Devices as Devices
  };
}
