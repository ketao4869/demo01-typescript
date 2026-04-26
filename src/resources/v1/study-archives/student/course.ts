// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * 学习档案的查询和更新接口
 */
export class Course extends APIResource {
  /**
   * 获取学员课程学习档案
   *
   * @example
   * ```ts
   * const course =
   *   await client.v1.studyArchives.student.course.retrieve(
   *     'courseId',
   *     { studentId: 'studentId' },
   *   );
   *
   * const content = await course.blob();
   * console.log(content);
   * ```
   */
  retrieve(courseID: string, params: CourseRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const { studentId } = params
    return this._client.get(path`/api/v1/study-archives/student/${studentId}/course/${courseID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新学习时长
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.studyArchives.student.course.updateStudyTime(
   *     'courseId',
   *     { studentId: 'studentId', minutes: 0 },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  updateStudyTime(courseID: string, params: CourseUpdateStudyTimeParams, options?: RequestOptions): APIPromise<Response> {
    const { studentId, minutes } = params
    return this._client.put(path`/api/v1/study-archives/student/${studentId}/course/${courseID}/study-time`, { query: { minutes }, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface CourseRetrieveParams {
  /**
   * 学员 ID
   */
  studentId: string;
}

export interface CourseUpdateStudyTimeParams {
  /**
   * Path param: 学员 ID
   */
  studentId: string;

  /**
   * Query param: 增加的学习时长（分钟）
   */
  minutes: number;
}

export declare namespace Course {
  export {
    type CourseRetrieveParams as CourseRetrieveParams,
    type CourseUpdateStudyTimeParams as CourseUpdateStudyTimeParams
  };
}
