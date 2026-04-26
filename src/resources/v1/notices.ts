// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 通知公告的增删改查接口
 */
export class Notices extends APIResource {
  /**
   * 创建通知公告
   *
   * @example
   * ```ts
   * const notice = await client.v1.notices.create({
   *   content: 'x',
   *   publishStatus: 0,
   *   targetType: 0,
   *   title: 'x',
   * });
   *
   * const content = await notice.blob();
   * console.log(content);
   * ```
   */
  create(body: NoticeCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/notices', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取通知公告详情
   *
   * @example
   * ```ts
   * const notice = await client.v1.notices.retrieve('id');
   *
   * const content = await notice.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/notices/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 更新通知公告
   *
   * @example
   * ```ts
   * const notice = await client.v1.notices.update('id', {
   *   content: 'x',
   *   publishStatus: 0,
   *   targetType: 0,
   *   title: 'x',
   * });
   *
   * const content = await notice.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: NoticeUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/notices/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取通知公告列表
   *
   * @example
   * ```ts
   * const notices = await client.v1.notices.list();
   *
   * const content = await notices.blob();
   * console.log(content);
   * ```
   */
  list(query: NoticeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/notices', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 删除通知公告
   *
   * @example
   * ```ts
   * const notice = await client.v1.notices.delete('id');
   *
   * const content = await notice.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/notices/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 发布通知公告
   *
   * @example
   * ```ts
   * const response = await client.v1.notices.publish('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  publish(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/notices/${id}/publish`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

/**
 * 通知公告创建请求
 */
export interface NoticeCreate {
  /**
   * 内容
   */
  content: string;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 目标类型：1=全部，2=特定运营单位，3=特定学员
   */
  targetType: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 目标 ID 列表（逗号分隔）
   */
  targetIds?: string | null;
}

export interface NoticeCreateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 目标类型：1=全部，2=特定运营单位，3=特定学员
   */
  targetType: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 目标 ID 列表（逗号分隔）
   */
  targetIds?: string | null;
}

export interface NoticeUpdateParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 发布状态：0=草稿，1=已发布
   */
  publishStatus: number;

  /**
   * 目标类型：1=全部，2=特定运营单位，3=特定学员
   */
  targetType: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 目标 ID 列表（逗号分隔）
   */
  targetIds?: string | null;
}

export interface NoticeListParams {
  page?: number;

  publishStatus?: number;

  size?: number;

  title?: string;
}

export declare namespace Notices {
  export {
    type NoticeCreate as NoticeCreate,
    type NoticeCreateParams as NoticeCreateParams,
    type NoticeUpdateParams as NoticeUpdateParams,
    type NoticeListParams as NoticeListParams
  };
}
