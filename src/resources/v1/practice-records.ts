// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 实训记录的增删查接口
 */
export class PracticeRecords extends APIResource {
  /**
   * 获取实训记录详情
   *
   * @example
   * ```ts
   * const practiceRecord =
   *   await client.v1.practiceRecords.retrieve(0);
   *
   * const content = await practiceRecord.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/practice-records/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除实训记录
   *
   * @example
   * ```ts
   * const practiceRecord =
   *   await client.v1.practiceRecords.delete(0);
   *
   * const content = await practiceRecord.blob();
   * console.log(content);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/practice-records/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 创建实训记录
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.practiceRecords.practiceRecords({
   *     duration: 0,
   *     podId: 'podId',
   *     studentId: 'studentId',
   *   });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  practiceRecords(body: PracticeRecordPracticeRecordsParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/practice-records', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取实训记录列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.practiceRecords.retrievePracticeRecords();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrievePracticeRecords(
    query: PracticeRecordRetrievePracticeRecordsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/practice-records', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取实训统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.practiceRecords.retrieveStatistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStatistics(
    query: PracticeRecordRetrieveStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/practice-records/statistics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PracticeRecordPracticeRecordsParams {
  /**
   * 实训时长（分钟）
   */
  duration: number;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 学员 ID
   */
  studentId: string;

  /**
   * 实训内容
   */
  content?: string | null;

  /**
   * 课程 ID
   */
  courseId?: number | string | null;

  /**
   * 设备使用 JSON
   */
  deviceUsage?: string | null;

  /**
   * 视频 URL
   */
  videoUrl?: string | null;
}

export interface PracticeRecordRetrievePracticeRecordsParams {
  courseId?: number;

  page?: number;

  podId?: number;

  size?: number;

  studentId?: number;
}

export interface PracticeRecordRetrieveStatisticsParams {
  /**
   * 学员 ID（可选）
   */
  studentId?: number;
}

export declare namespace PracticeRecords {
  export {
    type PracticeRecordPracticeRecordsParams as PracticeRecordPracticeRecordsParams,
    type PracticeRecordRetrievePracticeRecordsParams as PracticeRecordRetrievePracticeRecordsParams,
    type PracticeRecordRetrieveStatisticsParams as PracticeRecordRetrieveStatisticsParams,
  };
}
