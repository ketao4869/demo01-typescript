// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 设备告警的增删查接口
 */
export class DeviceAlerts extends APIResource {
  /**
   * 创建告警
   *
   * @example
   * ```ts
   * const deviceAlert = await client.v1.deviceAlerts.create({
   *   alertDesc: 'alertDesc',
   *   alertLevel: 0,
   *   alertType: 'alertType',
   *   deviceId: 'deviceId',
   *   podId: 'podId',
   * });
   *
   * const content = await deviceAlert.blob();
   * console.log(content);
   * ```
   */
  create(body: DeviceAlertCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/device-alerts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取告警详情
   *
   * @example
   * ```ts
   * const deviceAlert = await client.v1.deviceAlerts.retrieve(
   *   0,
   * );
   *
   * const content = await deviceAlert.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/device-alerts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取告警列表
   *
   * @example
   * ```ts
   * const deviceAlerts = await client.v1.deviceAlerts.list();
   *
   * const content = await deviceAlerts.blob();
   * console.log(content);
   * ```
   */
  list(query: DeviceAlertListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/device-alerts', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 处理告警
   *
   * @example
   * ```ts
   * const response = await client.v1.deviceAlerts.handle(0, {
   *   alertStatus: 0,
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  handle(id: number, body: DeviceAlertHandleParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/device-alerts/${id}/handle`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取告警统计
   *
   * @example
   * ```ts
   * const response = await client.v1.deviceAlerts.statistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  statistics(
    query: DeviceAlertStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/device-alerts/statistics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface DeviceAlertCreateParams {
  /**
   * 告警描述
   */
  alertDesc: string;

  /**
   * 告警级别：1=严重，2=重要，3=一般，4=提示
   */
  alertLevel: number;

  /**
   * 告警类型
   */
  alertType: string;

  /**
   * 设备 ID
   */
  deviceId: string;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 阈值信息
   */
  thresholdInfo?: string | null;
}

export interface DeviceAlertListParams {
  alertLevel?: number;

  alertStatus?: number;

  page?: number;

  podId?: number;

  size?: number;
}

export interface DeviceAlertHandleParams {
  /**
   * 告警状态：1=处理中，2=已关闭，3=已忽略，4=已恢复
   */
  alertStatus: number;

  /**
   * 处理结果
   */
  handleResult?: string | null;
}

export interface DeviceAlertStatisticsParams {
  /**
   * 实训舱 ID（可选，不传则统计全部）
   */
  podId?: number;
}

export declare namespace DeviceAlerts {
  export {
    type DeviceAlertCreateParams as DeviceAlertCreateParams,
    type DeviceAlertListParams as DeviceAlertListParams,
    type DeviceAlertHandleParams as DeviceAlertHandleParams,
    type DeviceAlertStatisticsParams as DeviceAlertStatisticsParams,
  };
}
