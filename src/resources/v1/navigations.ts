// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 导航的增删改查接口
 */
export class Navigations extends APIResource {
  /**
   * 创建导航
   *
   * @example
   * ```ts
   * const navigation = await client.v1.navigations.create({
   *   linkUrl: 'x',
   *   navName: 'x',
   *   navType: 0,
   *   sort: 0,
   *   status: 0,
   * });
   *
   * const content = await navigation.blob();
   * console.log(content);
   * ```
   */
  create(body: NavigationCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/navigations', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取导航详情
   *
   * @example
   * ```ts
   * const navigation = await client.v1.navigations.retrieve(
   *   'id',
   * );
   *
   * const content = await navigation.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/navigations/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新导航
   *
   * @example
   * ```ts
   * const navigation = await client.v1.navigations.update(
   *   'id',
   *   {
   *     linkUrl: 'x',
   *     navName: 'x',
   *     navType: 0,
   *     sort: 0,
   *     status: 0,
   *   },
   * );
   *
   * const content = await navigation.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: NavigationUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/navigations/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取导航列表
   *
   * @example
   * ```ts
   * const navigations = await client.v1.navigations.list();
   *
   * const content = await navigations.blob();
   * console.log(content);
   * ```
   */
  list(query: NavigationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/navigations', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除导航
   *
   * @example
   * ```ts
   * const navigation = await client.v1.navigations.delete('id');
   *
   * const content = await navigation.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/navigations/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

/**
 * 导航创建请求
 */
export interface NavigationCreate {
  /**
   * 链接 URL
   */
  linkUrl: string;

  /**
   * 导航名称
   */
  navName: string;

  /**
   * 导航类型：1=内部，2=外部
   */
  navType: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 图标
   */
  icon?: string | null;
}

export interface NavigationCreateParams {
  /**
   * 链接 URL
   */
  linkUrl: string;

  /**
   * 导航名称
   */
  navName: string;

  /**
   * 导航类型：1=内部，2=外部
   */
  navType: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 图标
   */
  icon?: string | null;
}

export interface NavigationUpdateParams {
  /**
   * 链接 URL
   */
  linkUrl: string;

  /**
   * 导航名称
   */
  navName: string;

  /**
   * 导航类型：1=内部，2=外部
   */
  navType: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 图标
   */
  icon?: string | null;
}

export interface NavigationListParams {
  status?: number;
}

export declare namespace Navigations {
  export {
    type NavigationCreate as NavigationCreate,
    type NavigationCreateParams as NavigationCreateParams,
    type NavigationUpdateParams as NavigationUpdateParams,
    type NavigationListParams as NavigationListParams
  };
}
