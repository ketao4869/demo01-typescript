// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 学员报名的增删改查接口
 */
export class Enrollments extends APIResource {
  /**
   * 创建报名
   *
   * @example
   * ```ts
   * const enrollment = await client.v1.enrollments.create({
   *   courseId: 'courseId',
   *   operationUnitId: 'operationUnitId',
   *   studentId: 'studentId',
   * });
   *
   * const content = await enrollment.blob();
   * console.log(content);
   * ```
   */
  create(body: EnrollmentCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/enrollments', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取报名详情
   *
   * @example
   * ```ts
   * const enrollment = await client.v1.enrollments.retrieve(
   *   'id',
   * );
   *
   * const content = await enrollment.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/enrollments/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取报名列表
   *
   * @example
   * ```ts
   * const enrollments = await client.v1.enrollments.list();
   *
   * const content = await enrollments.blob();
   * console.log(content);
   * ```
   */
  list(query: EnrollmentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/enrollments', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 审核报名
   *
   * @example
   * ```ts
   * const response = await client.v1.enrollments.audit('id', {
   *   auditStatus: 0,
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  audit(id: string, body: EnrollmentAuditParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/enrollments/${id}/audit`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 取消报名
   *
   * @example
   * ```ts
   * const response = await client.v1.enrollments.cancel('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/enrollments/${id}/cancel`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface EnrollmentCreateParams {
  /**
   * 课程 ID
   */
  courseId: string;

  /**
   * 运营单位 ID
   */
  operationUnitId: string;

  /**
   * 学员 ID
   */
  studentId: string;
}

export interface EnrollmentListParams {
  auditStatus?: number;

  courseId?: number;

  page?: number;

  size?: number;

  studentId?: number;
}

export interface EnrollmentAuditParams {
  /**
   * 审核状态：2=通过，3=拒绝
   */
  auditStatus: number;

  /**
   * 审核备注
   */
  auditRemark?: string | null;
}

export declare namespace Enrollments {
  export {
    type EnrollmentCreateParams as EnrollmentCreateParams,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentAuditParams as EnrollmentAuditParams
  };
}
