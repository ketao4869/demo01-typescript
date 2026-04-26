// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 设备的增删改查接口
 */
export class Devices extends APIResource {
  /**
   * 创建新的设备
   *
   * @example
   * ```ts
   * const device = await client.v1.devices.create({
   *   deviceName: 'deviceName',
   *   deviceType: 'deviceType',
   *   podId: 0,
   *   status: 'status',
   * });
   *
   * const content = await device.blob();
   * console.log(content);
   * ```
   */
  create(body: DeviceCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/devices', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据设备 ID 查询详细信息
   *
   * @example
   * ```ts
   * const device = await client.v1.devices.retrieve('id');
   *
   * const content = await device.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/devices/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 更新设备信息
   *
   * @example
   * ```ts
   * const device = await client.v1.devices.update('id');
   *
   * const content = await device.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: DeviceUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/devices/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询设备列表，page 从 1 开始，size 范围 1–100
   *
   * @example
   * ```ts
   * const devices = await client.v1.devices.list();
   *
   * const content = await devices.blob();
   * console.log(content);
   * ```
   */
  list(query: DeviceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/devices', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 删除设备
   *
   * @example
   * ```ts
   * const device = await client.v1.devices.delete('id');
   *
   * const content = await device.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/devices/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 查询指定实训舱下的所有设备
   *
   * @example
   * ```ts
   * const response = await client.v1.devices.listByPod('podId');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  listByPod(podID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/devices/pod/${podID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface DeviceCreateParams {
  /**
   * 设备名称
   */
  deviceName: string;

  /**
   * 设备类型
   */
  deviceType: string;

  /**
   * 所属实训舱 ID
   */
  podId: number;

  /**
   * 状态：NORMAL/FAULT/MAINTENANCE/OFFLINE
   */
  status: string;

  /**
   * 生产厂家
   */
  manufacturer?: string | null;

  /**
   * 设备型号
   */
  model?: string | null;

  /**
   * 设备参数配置（JSON）
   */
  params?: string | null;

  /**
   * 购买日期
   */
  purchaseDate?: string | null;

  /**
   * 保修截止日期
   */
  warrantyEndDate?: string | null;
}

export interface DeviceUpdateParams {
  /**
   * 设备名称
   */
  deviceName?: string | null;

  /**
   * 设备类型
   */
  deviceType?: string | null;

  /**
   * 生产厂家
   */
  manufacturer?: string | null;

  /**
   * 设备型号
   */
  model?: string | null;

  /**
   * 设备参数配置（JSON）
   */
  params?: string | null;

  /**
   * 所属实训舱 ID
   */
  podId?: number | null;

  /**
   * 购买日期
   */
  purchaseDate?: string | null;

  /**
   * 状态：NORMAL/FAULT/MAINTENANCE/OFFLINE
   */
  status?: string | null;

  /**
   * 保修截止日期
   */
  warrantyEndDate?: string | null;
}

export interface DeviceListParams {
  deviceName?: string;

  deviceType?: string;

  page?: number;

  size?: number;

  status?: string;
}

export declare namespace Devices {
  export {
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceUpdateParams as DeviceUpdateParams,
    type DeviceListParams as DeviceListParams
  };
}
