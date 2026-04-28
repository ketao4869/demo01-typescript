// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 学员的增删改查接口
 */
export class Students extends APIResource {
  /**
   * 创建学员
   *
   * @example
   * ```ts
   * const student = await client.v1.students.create({
   *   name: 'name',
   *   phone: '13166991022',
   * });
   *
   * const content = await student.blob();
   * console.log(content);
   * ```
   */
  create(body: StudentCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/students', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取学员详情
   *
   * @example
   * ```ts
   * const student = await client.v1.students.retrieve('id');
   *
   * const content = await student.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/students/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 更新学员
   *
   * @example
   * ```ts
   * const student = await client.v1.students.update('id');
   *
   * const content = await student.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: StudentUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/students/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取学员列表
   *
   * @example
   * ```ts
   * const students = await client.v1.students.list();
   *
   * const content = await students.blob();
   * console.log(content);
   * ```
   */
  list(query: StudentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/students', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除学员
   *
   * @example
   * ```ts
   * const student = await client.v1.students.delete('id');
   *
   * const content = await student.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/students/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 锁定学员
   *
   * @example
   * ```ts
   * const response = await client.v1.students.lock('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  lock(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/students/${id}/lock`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 解锁学员
   *
   * @example
   * ```ts
   * const response = await client.v1.students.unlock('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unlock(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/students/${id}/unlock`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StudentCreateParams {
  /**
   * 姓名
   */
  name: string;

  /**
   * 手机号
   */
  phone: string;

  /**
   * 头像 URL
   */
  avatar?: string | null;

  /**
   * 生日
   */
  birthday?: string | null;

  /**
   * 邮箱
   */
  email?: string | null;

  /**
   * 身份证号
   */
  idCard?: string | null;
}

export interface StudentUpdateParams {
  /**
   * 头像 URL
   */
  avatar?: string | null;

  /**
   * 生日
   */
  birthday?: string | null;

  /**
   * 邮箱
   */
  email?: string | null;

  /**
   * 身份证号
   */
  idCard?: string | null;

  /**
   * 姓名
   */
  name?: string | null;
}

export interface StudentListParams {
  name?: string;

  page?: number;

  phone?: string;

  size?: number;

  status?: number;
}

export declare namespace Students {
  export {
    type StudentCreateParams as StudentCreateParams,
    type StudentUpdateParams as StudentUpdateParams,
    type StudentListParams as StudentListParams,
  };
}
