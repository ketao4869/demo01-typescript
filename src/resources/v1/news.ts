// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 新闻资讯的增删改查接口
 */
export class News extends APIResource {
  /**
   * 创建新闻资讯
   *
   * @example
   * ```ts
   * const news = await client.v1.news.create({
   *   content: 'x',
   *   newsType: 0,
   *   publishStatus: 0,
   *   title: 'x',
   * });
   *
   * const content = await news.blob();
   * console.log(content);
   * ```
   */
  create(body: NewsCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/news', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取新闻资讯详情
   *
   * @example
   * ```ts
   * const news = await client.v1.news.retrieve('id');
   *
   * const content = await news.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/news/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新新闻资讯
   *
   * @example
   * ```ts
   * const news = await client.v1.news.update('id', {
   *   content: 'x',
   *   newsType: 0,
   *   publishStatus: 0,
   *   title: 'x',
   * });
   *
   * const content = await news.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: NewsUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/news/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取新闻资讯列表
   *
   * @example
   * ```ts
   * const news = await client.v1.news.list();
   *
   * const content = await news.blob();
   * console.log(content);
   * ```
   */
  list(query: NewsListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/news', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除新闻资讯
   *
   * @example
   * ```ts
   * const news = await client.v1.news.delete('id');
   *
   * const content = await news.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/news/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 发布新闻资讯
   *
   * @example
   * ```ts
   * const response = await client.v1.news.publish('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  publish(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/news/${id}/publish`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

/**
 * 新闻资讯创建请求
 */
export interface NewsCreate {
  /**
   * 内容
   */
  content: string;

  /**
   * 新闻类型：1=新闻，2=广告
   */
  newsType: number;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 封面图 URL
   */
  coverImage?: string | null;
}

export interface NewsCreateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 新闻类型：1=新闻，2=广告
   */
  newsType: number;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 封面图 URL
   */
  coverImage?: string | null;
}

export interface NewsUpdateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 新闻类型：1=新闻，2=广告
   */
  newsType: number;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 封面图 URL
   */
  coverImage?: string | null;
}

export interface NewsListParams {
  newsType?: number;

  page?: number;

  publishStatus?: number;

  size?: number;

  title?: string;
}

export declare namespace News {
  export {
    type NewsCreate as NewsCreate,
    type NewsCreateParams as NewsCreateParams,
    type NewsUpdateParams as NewsUpdateParams,
    type NewsListParams as NewsListParams
  };
}
