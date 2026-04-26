// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 轮播图的增删改查接口
 */
export class Banners extends APIResource {
  /**
   * 创建轮播图
   *
   * @example
   * ```ts
   * const banner = await client.v1.banners.create({
   *   imageUrl: 'x',
   *   position: 0,
   *   sort: 0,
   *   status: 0,
   *   title: 'x',
   * });
   *
   * const content = await banner.blob();
   * console.log(content);
   * ```
   */
  create(body: BannerCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/banners', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 按位置获取轮播图
   *
   * @example
   * ```ts
   * const banner = await client.v1.banners.retrieve(1);
   *
   * const content = await banner.blob();
   * console.log(content);
   * ```
   */
  retrieve(position: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/banners/position/${position}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新轮播图
   *
   * @example
   * ```ts
   * const banner = await client.v1.banners.update('id', {
   *   imageUrl: 'x',
   *   position: 0,
   *   sort: 0,
   *   status: 0,
   *   title: 'x',
   * });
   *
   * const content = await banner.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: BannerUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/banners/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取所有轮播图
   *
   * @example
   * ```ts
   * const banners = await client.v1.banners.list();
   *
   * const content = await banners.blob();
   * console.log(content);
   * ```
   */
  list(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/banners', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除轮播图
   *
   * @example
   * ```ts
   * const banner = await client.v1.banners.delete('id');
   *
   * const content = await banner.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/banners/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

/**
 * 轮播图创建请求
 */
export interface BannerCreate {
  /**
   * 图片 URL
   */
  imageUrl: string;

  /**
   * 位置：1=首页，2=课程页
   */
  position: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 链接 URL
   */
  linkUrl?: string | null;
}

export interface BannerCreateParams {
  /**
   * 图片 URL
   */
  imageUrl: string;

  /**
   * 位置：1=首页，2=课程页
   */
  position: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 链接 URL
   */
  linkUrl?: string | null;
}

export interface BannerUpdateParams {
  /**
   * 图片 URL
   */
  imageUrl: string;

  /**
   * 位置：1=首页，2=课程页
   */
  position: number;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 链接 URL
   */
  linkUrl?: string | null;
}

export declare namespace Banners {
  export {
    type BannerCreate as BannerCreate,
    type BannerCreateParams as BannerCreateParams,
    type BannerUpdateParams as BannerUpdateParams
  };
}
