// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 助教的增删改查接口
 */
export class Courses extends APIResource {
  /**
   * 获取助教绑定的课程
   *
   * @example
   * ```ts
   * const courses = await client.v1.tutors.courses.list('id');
   *
   * const content = await courses.blob();
   * console.log(content);
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/tutors/${id}/courses`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 绑定课程
   *
   * @example
   * ```ts
   * const response = await client.v1.tutors.courses.bind('id', {
   *   body: [0],
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  bind(id: string, params: CourseBindParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post(path`/api/v1/tutors/${id}/courses`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 解绑课程
   *
   * @example
   * ```ts
   * const response = await client.v1.tutors.courses.unbind(
   *   'courseId',
   *   { id: 'id' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unbind(courseID: string, params: CourseUnbindParams, options?: RequestOptions): APIPromise<Response> {
    const { id } = params;
    return this._client.delete(path`/api/v1/tutors/${id}/courses/${courseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface CourseBindParams {
  body: Array<number>;
}

export interface CourseUnbindParams {
  /**
   * 助教 ID
   */
  id: string;
}

export declare namespace Courses {
  export { type CourseBindParams as CourseBindParams, type CourseUnbindParams as CourseUnbindParams };
}
