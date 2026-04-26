// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * 数据统计与报表接口
 */
export class Statistics extends APIResource {
  /**
   * 获取课程统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.statistics.retrieveCourses();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveCourses(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/statistics/courses', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取综合统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.statistics.retrieveOverview();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveOverview(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/statistics/overview', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取实训舱统计
   *
   * @example
   * ```ts
   * const response = await client.v1.statistics.retrievePods();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrievePods(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/statistics/pods', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取学员统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.statistics.retrieveStudents();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStudents(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/statistics/students', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}
