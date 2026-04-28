// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 考试记录的增删查接口
 */
export class ExamRecords extends APIResource {
  /**
   * 创建考试记录
   *
   * @example
   * ```ts
   * const examRecord = await client.v1.examRecords.create({
   *   checkType: 0,
   *   duration: 0,
   *   podId: 'podId',
   *   studentId: 'studentId',
   *   totalScore: 0,
   * });
   *
   * const content = await examRecord.blob();
   * console.log(content);
   * ```
   */
  create(body: ExamRecordCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/exam-records', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取考试记录详情
   *
   * @example
   * ```ts
   * const examRecord = await client.v1.examRecords.retrieve(0);
   *
   * const content = await examRecord.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/exam-records/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取考试记录列表
   *
   * @example
   * ```ts
   * const examRecords = await client.v1.examRecords.list();
   *
   * const content = await examRecords.blob();
   * console.log(content);
   * ```
   */
  list(query: ExamRecordListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/exam-records', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除考试记录
   *
   * @example
   * ```ts
   * const examRecord = await client.v1.examRecords.delete(0);
   *
   * const content = await examRecord.blob();
   * console.log(content);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/exam-records/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 完成考试
   *
   * @example
   * ```ts
   * const response = await client.v1.examRecords.complete(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  complete(id: number, body: ExamRecordCompleteParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/exam-records/${id}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取考试统计
   *
   * @example
   * ```ts
   * const response = await client.v1.examRecords.statistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  statistics(
    query: ExamRecordStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/exam-records/statistics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ExamRecordCreateParams {
  /**
   * 考核类型：1=人工，2=自动
   */
  checkType: number;

  /**
   * 考试时长（分钟）
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
   * 总分
   */
  totalScore: number;

  /**
   * 课程 ID
   */
  courseId?: number | string | null;
}

export interface ExamRecordListParams {
  courseId?: number;

  page?: number;

  podId?: number;

  size?: number;

  studentId?: number;
}

export interface ExamRecordCompleteParams {
  /**
   * 通过状态：0=未通过，1=通过
   */
  passStatus?: number | null;

  /**
   * 考试成绩
   */
  score?: number | null;

  /**
   * 视频 URL
   */
  videoUrl?: string | null;
}

export interface ExamRecordStatisticsParams {
  /**
   * 学员 ID（可选）
   */
  studentId?: number;
}

export declare namespace ExamRecords {
  export {
    type ExamRecordCreateParams as ExamRecordCreateParams,
    type ExamRecordListParams as ExamRecordListParams,
    type ExamRecordCompleteParams as ExamRecordCompleteParams,
    type ExamRecordStatisticsParams as ExamRecordStatisticsParams,
  };
}
