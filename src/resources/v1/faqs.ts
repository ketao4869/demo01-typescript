// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 常见问题的增删改查接口
 */
export class Faqs extends APIResource {
  /**
   * 创建 FAQ
   *
   * @example
   * ```ts
   * const faq = await client.v1.faqs.create({
   *   answer: 'x',
   *   question: 'x',
   *   sort: 0,
   *   status: 0,
   * });
   *
   * const content = await faq.blob();
   * console.log(content);
   * ```
   */
  create(body: FaqCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/faqs', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取 FAQ 详情
   *
   * @example
   * ```ts
   * const faq = await client.v1.faqs.retrieve('id');
   *
   * const content = await faq.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/faqs/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新 FAQ
   *
   * @example
   * ```ts
   * const faq = await client.v1.faqs.update('id', {
   *   answer: 'x',
   *   question: 'x',
   *   sort: 0,
   *   status: 0,
   * });
   *
   * const content = await faq.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: FaqUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/faqs/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取 FAQ 列表
   *
   * @example
   * ```ts
   * const faqs = await client.v1.faqs.list();
   *
   * const content = await faqs.blob();
   * console.log(content);
   * ```
   */
  list(query: FaqListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/faqs', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除 FAQ
   *
   * @example
   * ```ts
   * const faq = await client.v1.faqs.delete('id');
   *
   * const content = await faq.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/faqs/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

/**
 * FAQ 创建请求
 */
export interface FaqCreate {
  /**
   * 答案
   */
  answer: string;

  /**
   * 问题
   */
  question: string;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 分类
   */
  category?: string | null;
}

export interface FaqCreateParams {
  /**
   * 答案
   */
  answer: string;

  /**
   * 问题
   */
  question: string;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 分类
   */
  category?: string | null;
}

export interface FaqUpdateParams {
  /**
   * 答案
   */
  answer: string;

  /**
   * 问题
   */
  question: string;

  /**
   * 排序
   */
  sort: number;

  /**
   * 状态：0=禁用，1=启用
   */
  status: number;

  /**
   * 分类
   */
  category?: string | null;
}

export interface FaqListParams {
  category?: string;

  page?: number;

  size?: number;

  status?: number;
}

export declare namespace Faqs {
  export {
    type FaqCreate as FaqCreate,
    type FaqCreateParams as FaqCreateParams,
    type FaqUpdateParams as FaqUpdateParams,
    type FaqListParams as FaqListParams
  };
}
