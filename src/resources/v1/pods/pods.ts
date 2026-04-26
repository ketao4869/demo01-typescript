// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimeSlotsAPI from './time-slots';
import { TimeSlotCreateBatchParams, TimeSlotCreateParams, TimeSlotDeleteParams, TimeSlotListParams, TimeSlotLockParams, TimeSlotRetrieveParams, TimeSlotUnlockParams, TimeSlots } from './time-slots';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 实训舱的增删改查接口
 */
export class Pods extends APIResource {
  timeSlots: TimeSlotsAPI.TimeSlots = new TimeSlotsAPI.TimeSlots(this._client);

  /**
   * 创建新的实训舱
   *
   * @example
   * ```ts
   * const pod = await client.v1.pods.create({
   *   podCode: 'POD001',
   *   podName: '实训舱一号',
   *   podType: 'MOBILE',
   *   status: 'ENABLED',
   *   workMode: 'IDLE',
   * });
   *
   * const content = await pod.blob();
   * console.log(content);
   * ```
   */
  create(body: PodCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/pods', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 查询实训舱详细信息
   *
   * @example
   * ```ts
   * const pod = await client.v1.pods.retrieve('id');
   *
   * const content = await pod.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/pods/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 更新实训舱信息
   *
   * @example
   * ```ts
   * const pod = await client.v1.pods.update('id');
   *
   * const content = await pod.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: PodUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/pods/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询实训舱列表，支持按编号、名称、类型、工作模式、状态搜索
   *
   * @example
   * ```ts
   * const pods = await client.v1.pods.list();
   *
   * const content = await pods.blob();
   * console.log(content);
   * ```
   */
  list(query: PodListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/pods', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 删除实训舱
   *
   * @example
   * ```ts
   * const pod = await client.v1.pods.delete('id');
   *
   * const content = await pod.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/pods/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 停用指定实训舱
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.disable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/pods/${id}/disable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 启用指定实训舱
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.enable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  enable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/pods/${id}/enable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取指定固定教学点下的所有实训舱
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.listByFixedPoint(
   *   'fixedPointId',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  listByFixedPoint(fixedPointID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/pods/by-fixed-point/${fixedPointID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface PodCreateParams {
  /**
   * 实训舱编号
   */
  podCode: string;

  /**
   * 实训舱名称
   */
  podName: string;

  /**
   * 实训舱类型（MOBILE: 移动, FIXED: 固定）
   */
  podType: string;

  /**
   * 状态（ENABLED: 启用, DISABLED: 停用）
   */
  status: string;

  /**
   * 工作模式（OPERATION: 运营, IDLE: 空闲, TRANSPORT: 运输, MAINTENANCE: 维修,
   * RETIRED: 退服）
   */
  workMode: string;

  /**
   * 地址
   */
  address?: string | null;

  /**
   * 设备 ID 列表
   */
  deviceIds?: Array<number>;

  /**
   * 固定教学点 ID（固定实训舱时必填）
   */
  fixedPointId?: number | null;

  /**
   * 纬度
   */
  latitude?: number | null;

  /**
   * 经度
   */
  longitude?: number | null;

  /**
   * 支持的课程 ID 列表
   */
  supportedCourseIds?: Array<number>;
}

export interface PodUpdateParams {
  /**
   * 地址
   */
  address?: string | null;

  /**
   * 设备 ID 列表
   */
  deviceIds?: Array<number>;

  /**
   * 固定教学点 ID
   */
  fixedPointId?: number | null;

  /**
   * 纬度
   */
  latitude?: number | null;

  /**
   * 经度
   */
  longitude?: number | null;

  /**
   * 实训舱名称
   */
  podName?: string | null;

  /**
   * 实训舱类型（MOBILE: 移动, FIXED: 固定）
   */
  podType?: string | null;

  /**
   * 状态
   */
  status?: string | null;

  /**
   * 支持的课程 ID 列表
   */
  supportedCourseIds?: Array<number>;

  /**
   * 工作模式
   */
  workMode?: string | null;
}

export interface PodListParams {
  fixedPointId?: number;

  page?: number;

  podCode?: string;

  podName?: string;

  podType?: string;

  size?: number;

  status?: string;

  workMode?: string;
}

Pods.TimeSlots = TimeSlots;

export declare namespace Pods {
  export {
    type PodCreateParams as PodCreateParams,
    type PodUpdateParams as PodUpdateParams,
    type PodListParams as PodListParams
  };

  export {
    TimeSlots as TimeSlots,
    type TimeSlotCreateParams as TimeSlotCreateParams,
    type TimeSlotRetrieveParams as TimeSlotRetrieveParams,
    type TimeSlotListParams as TimeSlotListParams,
    type TimeSlotDeleteParams as TimeSlotDeleteParams,
    type TimeSlotCreateBatchParams as TimeSlotCreateBatchParams,
    type TimeSlotLockParams as TimeSlotLockParams,
    type TimeSlotUnlockParams as TimeSlotUnlockParams
  };
}
