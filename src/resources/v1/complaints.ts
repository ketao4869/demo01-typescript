// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 投诉举报的增删改查接口
 */
export class Complaints extends APIResource {
  /**
   * 创建投诉举报
   *
   * @example
   * ```ts
   * const complaint = await client.v1.complaints.create({
   *   complaintType: 0,
   *   content: 'x',
   * });
   *
   * const content = await complaint.blob();
   * console.log(content);
   * ```
   */
  create(body: ComplaintCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/complaints', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取投诉举报详情
   *
   * @example
   * ```ts
   * const complaint = await client.v1.complaints.retrieve('id');
   *
   * const content = await complaint.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/complaints/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取投诉举报列表
   *
   * @example
   * ```ts
   * const complaints = await client.v1.complaints.list();
   *
   * const content = await complaints.blob();
   * console.log(content);
   * ```
   */
  list(query: ComplaintListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/complaints', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 处理投诉举报
   *
   * @example
   * ```ts
   * const response = await client.v1.complaints.updateProcess(
   *   'id',
   *   { processResult: 'x' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  updateProcess(
    id: string,
    body: ComplaintUpdateProcessParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.put(path`/api/v1/complaints/${id}/process`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ComplaintCreateParams {
  /**
   * 投诉类型：1=服务投诉，2=设备投诉，3=其他
   */
  complaintType: number;

  /**
   * 投诉内容
   */
  content: string;

  /**
   * 联系方式（手机号或邮箱）
   */
  contactInfo?: string | null;

  /**
   * 证据图片 URL 列表（逗号分隔）
   */
  evidenceImages?: string | null;
}

export interface ComplaintListParams {
  complaintType?: number;

  page?: number;

  size?: number;

  status?: number;
}

export interface ComplaintUpdateProcessParams {
  /**
   * 处理结果
   */
  processResult: string;

  /**
   * 处理状态：1=已处理，2=已驳回
   */
  status?: number | null;
}

export declare namespace Complaints {
  export {
    type ComplaintCreateParams as ComplaintCreateParams,
    type ComplaintListParams as ComplaintListParams,
    type ComplaintUpdateProcessParams as ComplaintUpdateProcessParams,
  };
}
