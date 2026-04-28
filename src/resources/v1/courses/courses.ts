// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PodsAPI from './pods';
import { PodBindParams, Pods } from './pods';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 课程的增删改查接口
 */
export class Courses extends APIResource {
  pods: PodsAPI.Pods = new PodsAPI.Pods(this._client);

  /**
   * 创建课程
   *
   * @example
   * ```ts
   * const course = await client.v1.courses.create({
   *   courseName: 'courseName',
   *   duration: 0,
   *   hrOrganizationId: 'hrOrganizationId',
   *   operationUnitId: 'operationUnitId',
   *   status: 'status',
   * });
   *
   * const content = await course.blob();
   * console.log(content);
   * ```
   */
  create(body: CourseCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/courses', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取课程详情
   *
   * @example
   * ```ts
   * const course = await client.v1.courses.retrieve('id');
   *
   * const content = await course.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/courses/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 更新课程
   *
   * @example
   * ```ts
   * const course = await client.v1.courses.update('id');
   *
   * const content = await course.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: CourseUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/courses/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取课程列表
   *
   * @example
   * ```ts
   * const courses = await client.v1.courses.list();
   *
   * const content = await courses.blob();
   * console.log(content);
   * ```
   */
  list(query: CourseListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/courses', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除课程
   *
   * @example
   * ```ts
   * const course = await client.v1.courses.delete('id');
   *
   * const content = await course.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/courses/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 发布课程
   *
   * @example
   * ```ts
   * const response = await client.v1.courses.publish('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  publish(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/courses/${id}/publish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 下架课程
   *
   * @example
   * ```ts
   * const response = await client.v1.courses.unpublish('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unpublish(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/courses/${id}/unpublish`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface CourseCreateParams {
  /**
   * 课程名称
   */
  courseName: string;

  /**
   * 课程时长（分钟）
   */
  duration: number;

  /**
   * 所属人社单位 ID
   */
  hrOrganizationId: string;

  /**
   * 所属运营单位 ID
   */
  operationUnitId: string;

  /**
   * 状态：DRAFT/PUBLISHED/OFFLINE
   */
  status: string;

  /**
   * 课程内容
   */
  content?: string | null;

  /**
   * 封面图片 URL
   */
  coverImage?: string | null;

  /**
   * 课程描述
   */
  description?: string | null;

  /**
   * 课程价格
   */
  price?: number | null;
}

export interface CourseUpdateParams {
  /**
   * 课程内容
   */
  content?: string | null;

  /**
   * 课程名称
   */
  courseName?: string | null;

  /**
   * 封面图片 URL
   */
  coverImage?: string | null;

  /**
   * 课程描述
   */
  description?: string | null;

  /**
   * 课程时长（分钟）
   */
  duration?: number | null;

  /**
   * 课程价格
   */
  price?: number | null;
}

export interface CourseListParams {
  courseName?: string;

  page?: number;

  size?: number;

  status?: string;
}

Courses.Pods = Pods;

export declare namespace Courses {
  export {
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams,
  };

  export { Pods as Pods, type PodBindParams as PodBindParams };
}
