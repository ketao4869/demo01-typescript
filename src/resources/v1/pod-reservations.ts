// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 实训舱预约的增删查接口
 */
export class PodReservations extends APIResource {
  /**
   * 创建预约
   *
   * @example
   * ```ts
   * const podReservation =
   *   await client.v1.podReservations.create({
   *     endTime: 'endTime',
   *     podId: 'podId',
   *     reservationDate: '2019-12-27',
   *     reservationType: 0,
   *     slotId: 0,
   *     startTime: 'startTime',
   *     studentId: 'studentId',
   *   });
   *
   * const content = await podReservation.blob();
   * console.log(content);
   * ```
   */
  create(body: PodReservationCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/pod-reservations', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取预约详情
   *
   * @example
   * ```ts
   * const podReservation =
   *   await client.v1.podReservations.retrieve(0);
   *
   * const content = await podReservation.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/pod-reservations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取预约列表
   *
   * @example
   * ```ts
   * const podReservations =
   *   await client.v1.podReservations.list();
   *
   * const content = await podReservations.blob();
   * console.log(content);
   * ```
   */
  list(
    query: PodReservationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/pod-reservations', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除预约
   *
   * @example
   * ```ts
   * const podReservation =
   *   await client.v1.podReservations.delete(0);
   *
   * const content = await podReservation.blob();
   * console.log(content);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/pod-reservations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 取消预约
   *
   * @example
   * ```ts
   * const response = await client.v1.podReservations.cancel(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  cancel(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/pod-reservations/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PodReservationCreateParams {
  /**
   * 结束时间
   */
  endTime: string;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 预约日期
   */
  reservationDate: string;

  /**
   * 预约类型：1=实训，2=考试
   */
  reservationType: number;

  /**
   * 时段 ID
   */
  slotId: number | string | null;

  /**
   * 开始时间
   */
  startTime: string;

  /**
   * 学员 ID
   */
  studentId: string;

  /**
   * 课程 ID
   */
  courseId?: number | string | null;
}

export interface PodReservationListParams {
  page?: number;

  podId?: number;

  reservationDate?: string;

  size?: number;

  studentId?: number;
}

export declare namespace PodReservations {
  export {
    type PodReservationCreateParams as PodReservationCreateParams,
    type PodReservationListParams as PodReservationListParams,
  };
}
