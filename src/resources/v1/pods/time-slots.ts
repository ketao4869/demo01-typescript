// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 实训舱时段的增删改查接口
 */
export class TimeSlots extends APIResource {
  /**
   * 创建单个实训舱时段
   *
   * @example
   * ```ts
   * const timeSlot = await client.v1.pods.timeSlots.create(
   *   'podId',
   *   {
   *     endTime: 'endTime',
   *     podId: 'podId',
   *     slotDate: '2019-12-27',
   *     startTime: 'startTime',
   *   },
   * );
   *
   * const content = await timeSlot.blob();
   * console.log(content);
   * ```
   */
  create(podID: string, body: TimeSlotCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/api/v1/pods/${podID}/time-slots`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 查询时段详情
   *
   * @example
   * ```ts
   * const timeSlot = await client.v1.pods.timeSlots.retrieve(
   *   'id',
   *   { podId: 'podId' },
   * );
   *
   * const content = await timeSlot.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, params: TimeSlotRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const { podId } = params
    return this._client.get(path`/api/v1/pods/${podId}/time-slots/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据实训舱 ID 和日期查询时段列表
   *
   * @example
   * ```ts
   * const timeSlots = await client.v1.pods.timeSlots.list(
   *   'podId',
   *   { date: '2019-12-27' },
   * );
   *
   * const content = await timeSlots.blob();
   * console.log(content);
   * ```
   */
  list(podID: string, query: TimeSlotListParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/pods/${podID}/time-slots`, { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除指定时段
   *
   * @example
   * ```ts
   * const timeSlot = await client.v1.pods.timeSlots.delete(
   *   'id',
   *   { podId: 'podId' },
   * );
   *
   * const content = await timeSlot.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, params: TimeSlotDeleteParams, options?: RequestOptions): APIPromise<Response> {
    const { podId } = params
    return this._client.delete(path`/api/v1/pods/${podId}/time-slots/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 批量创建实训舱时段
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.timeSlots.createBatch(
   *   'podId',
   *   {
   *     endDate: '2019-12-27',
   *     endTime: 'endTime',
   *     podId: 'podId',
   *     startDate: '2019-12-27',
   *     startTime: 'startTime',
   *   },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  createBatch(podID: string, body: TimeSlotCreateBatchParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/api/v1/pods/${podID}/time-slots/batch`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 锁定指定时段
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.timeSlots.lock('id', {
   *   podId: 'podId',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  lock(id: string, params: TimeSlotLockParams, options?: RequestOptions): APIPromise<Response> {
    const { podId, reason } = params
    return this._client.put(path`/api/v1/pods/${podId}/time-slots/${id}/lock`, { query: { reason }, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 解锁指定时段
   *
   * @example
   * ```ts
   * const response = await client.v1.pods.timeSlots.unlock(
   *   'id',
   *   { podId: 'podId' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unlock(id: string, params: TimeSlotUnlockParams, options?: RequestOptions): APIPromise<Response> {
    const { podId } = params
    return this._client.put(path`/api/v1/pods/${podId}/time-slots/${id}/unlock`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface TimeSlotCreateParams {
  /**
   * 结束时间
   */
  endTime: string | null;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 时段日期
   */
  slotDate: string;

  /**
   * 开始时间
   */
  startTime: string | null;

  /**
   * 状态：AVAILABLE/RESERVED/LOCKED
   */
  status?: string | null;
}

export interface TimeSlotRetrieveParams {
  podId: string;
}

export interface TimeSlotListParams {
  date: string;
}

export interface TimeSlotDeleteParams {
  podId: string;
}

export interface TimeSlotCreateBatchParams {
  /**
   * 结束日期
   */
  endDate: string;

  /**
   * 每天结束时间
   */
  endTime: string | null;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 开始日期
   */
  startDate: string;

  /**
   * 每天开始时间
   */
  startTime: string | null;

  /**
   * 时段时长（分钟）
   */
  slotDuration?: number | null;
}

export interface TimeSlotLockParams {
  /**
   * Path param
   */
  podId: string;

  /**
   * Query param
   */
  reason?: string;
}

export interface TimeSlotUnlockParams {
  podId: string;
}

export declare namespace TimeSlots {
  export {
    type TimeSlotCreateParams as TimeSlotCreateParams,
    type TimeSlotRetrieveParams as TimeSlotRetrieveParams,
    type TimeSlotListParams as TimeSlotListParams,
    type TimeSlotDeleteParams as TimeSlotDeleteParams,
    type TimeSlotCreateBatchParams as TimeSlotCreateBatchParams,
    type TimeSlotLockParams as TimeSlotLockParams,
    type TimeSlotUnlockParams as TimeSlotUnlockParams
  };
}
