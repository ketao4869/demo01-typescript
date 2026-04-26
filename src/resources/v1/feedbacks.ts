// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 意见反馈的增删改查接口
 */
export class Feedbacks extends APIResource {
  /**
   * 创建意见反馈
   *
   * @example
   * ```ts
   * const feedback = await client.v1.feedbacks.create({
   *   content: 'x',
   *   feedbackType: 0,
   * });
   *
   * const content = await feedback.blob();
   * console.log(content);
   * ```
   */
  create(body: FeedbackCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/feedbacks', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取意见反馈详情
   *
   * @example
   * ```ts
   * const feedback = await client.v1.feedbacks.retrieve('id');
   *
   * const content = await feedback.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/feedbacks/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取意见反馈列表
   *
   * @example
   * ```ts
   * const feedbacks = await client.v1.feedbacks.list();
   *
   * const content = await feedbacks.blob();
   * console.log(content);
   * ```
   */
  list(query: FeedbackListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/feedbacks', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 处理意见反馈
   *
   * @example
   * ```ts
   * const response = await client.v1.feedbacks.process('id', {
   *   processResult: 'x',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  process(id: string, body: FeedbackProcessParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/feedbacks/${id}/process`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取意见反馈统计
   *
   * @example
   * ```ts
   * const response = await client.v1.feedbacks.statistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  statistics(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/feedbacks/statistics', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface FeedbackCreateParams {
  /**
   * 反馈内容
   */
  content: string;

  /**
   * 反馈类型：1=功能建议，2=问题反馈，3=其他
   */
  feedbackType: number;

  /**
   * 联系方式（手机号或邮箱）
   */
  contactInfo?: string | null;

  /**
   * 图片 URL 列表（逗号分隔）
   */
  images?: string | null;
}

export interface FeedbackListParams {
  feedbackType?: number;

  page?: number;

  size?: number;

  status?: number;
}

export interface FeedbackProcessParams {
  /**
   * 处理结果
   */
  processResult: string;
}

export declare namespace Feedbacks {
  export {
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackListParams as FeedbackListParams,
    type FeedbackProcessParams as FeedbackProcessParams
  };
}
