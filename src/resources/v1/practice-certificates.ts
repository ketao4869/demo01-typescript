// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 实训证明的增删查接口
 */
export class PracticeCertificates extends APIResource {
  /**
   * 获取实训证明详情
   *
   * @example
   * ```ts
   * const practiceCertificate =
   *   await client.v1.practiceCertificates.retrieve('id');
   *
   * const content = await practiceCertificate.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/practice-certificates/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除实训证明
   *
   * @example
   * ```ts
   * const practiceCertificate =
   *   await client.v1.practiceCertificates.delete('id');
   *
   * const content = await practiceCertificate.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/practice-certificates/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 生成实训证明
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.practiceCertificates.practiceCertificates(
   *     {
   *       courseId: 'courseId',
   *       issueDate: '2019-12-27',
   *       practiceHours: 0,
   *       studentId: 'studentId',
   *     },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  practiceCertificates(body: PracticeCertificatePracticeCertificatesParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/practice-certificates', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取实训证明列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.practiceCertificates.retrievePracticeCertificates();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrievePracticeCertificates(query: PracticeCertificateRetrievePracticeCertificatesParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/practice-certificates', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface PracticeCertificatePracticeCertificatesParams {
  /**
   * 课程 ID
   */
  courseId: string;

  /**
   * 颁发日期
   */
  issueDate: string;

  /**
   * 实训时长（小时）
   */
  practiceHours: number;

  /**
   * 学员 ID
   */
  studentId: string;

  /**
   * 证明 URL
   */
  certUrl?: string | null;
}

export interface PracticeCertificateRetrievePracticeCertificatesParams {
  courseId?: number;

  page?: number;

  size?: number;

  studentId?: number;
}

export declare namespace PracticeCertificates {
  export {
    type PracticeCertificatePracticeCertificatesParams as PracticeCertificatePracticeCertificatesParams,
    type PracticeCertificateRetrievePracticeCertificatesParams as PracticeCertificateRetrievePracticeCertificatesParams
  };
}
