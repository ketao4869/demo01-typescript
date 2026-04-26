// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoursesAPI from './courses';
import { CourseBindParams, CourseUnbindParams, Courses } from './courses';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 助教的增删改查接口
 */
export class Tutors extends APIResource {
  courses: CoursesAPI.Courses = new CoursesAPI.Courses(this._client);

  /**
   * 创建助教
   *
   * @example
   * ```ts
   * const tutor = await client.v1.tutors.create({
   *   name: 'x',
   *   phone: 'x',
   *   tutorType: 0,
   * });
   *
   * const content = await tutor.blob();
   * console.log(content);
   * ```
   */
  create(body: TutorCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/tutors', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取助教详情
   *
   * @example
   * ```ts
   * const tutor = await client.v1.tutors.retrieve('id');
   *
   * const content = await tutor.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/tutors/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新助教
   *
   * @example
   * ```ts
   * const tutor = await client.v1.tutors.update('id');
   *
   * const content = await tutor.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: TutorUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/tutors/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取助教列表
   *
   * @example
   * ```ts
   * const tutors = await client.v1.tutors.list();
   *
   * const content = await tutors.blob();
   * console.log(content);
   * ```
   */
  list(query: TutorListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/tutors', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除助教
   *
   * @example
   * ```ts
   * const tutor = await client.v1.tutors.delete('id');
   *
   * const content = await tutor.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/tutors/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 锁定助教
   *
   * @example
   * ```ts
   * const response = await client.v1.tutors.lock('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  lock(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/tutors/${id}/lock`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 解锁助教
   *
   * @example
   * ```ts
   * const response = await client.v1.tutors.unlock('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unlock(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/tutors/${id}/unlock`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface TutorCreateParams {
  /**
   * 姓名
   */
  name: string;

  /**
   * 手机号
   */
  phone: string;

  /**
   * 助教类型：1=人工助教，2=AI 助教
   */
  tutorType: number;

  /**
   * 邮箱
   */
  email?: string;

  /**
   * 简介
   */
  introduction?: string;

  /**
   * 职称
   */
  title?: string;
}

export interface TutorUpdateParams {
  /**
   * 邮箱
   */
  email?: string;

  /**
   * 简介
   */
  introduction?: string;

  /**
   * 姓名
   */
  name?: string;

  /**
   * 手机号
   */
  phone?: string;

  /**
   * 职称
   */
  title?: string;
}

export interface TutorListParams {
  name?: string;

  page?: number;

  size?: number;

  status?: number;

  tutorType?: number;
}

Tutors.Courses = Courses;

export declare namespace Tutors {
  export {
    type TutorCreateParams as TutorCreateParams,
    type TutorUpdateParams as TutorUpdateParams,
    type TutorListParams as TutorListParams
  };

  export {
    Courses as Courses,
    type CourseBindParams as CourseBindParams,
    type CourseUnbindParams as CourseUnbindParams
  };
}
