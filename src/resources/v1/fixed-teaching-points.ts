// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 固定教学点的增删改查接口
 */
export class FixedTeachingPoints extends APIResource {
  /**
   * 创建新的固定教学点
   *
   * @example
   * ```ts
   * const fixedTeachingPoint =
   *   await client.v1.fixedTeachingPoints.create({
   *     address: '北京市朝阳区',
   *     latitude: 39.90403,
   *     longitude: 116.407526,
   *     pointCode: 'FP001',
   *     pointName: '北京培训中心',
   *     status: 'ENABLED',
   *   });
   *
   * const content = await fixedTeachingPoint.blob();
   * console.log(content);
   * ```
   */
  create(body: FixedTeachingPointCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/fixed-teaching-points', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 查询固定教学点详细信息
   *
   * @example
   * ```ts
   * const fixedTeachingPoint =
   *   await client.v1.fixedTeachingPoints.retrieve('id');
   *
   * const content = await fixedTeachingPoint.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/fixed-teaching-points/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 更新固定教学点信息
   *
   * @example
   * ```ts
   * const fixedTeachingPoint =
   *   await client.v1.fixedTeachingPoints.update('id');
   *
   * const content = await fixedTeachingPoint.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: FixedTeachingPointUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/fixed-teaching-points/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询固定教学点列表，支持按编号、名称、状态搜索
   *
   * @example
   * ```ts
   * const fixedTeachingPoints =
   *   await client.v1.fixedTeachingPoints.list();
   *
   * const content = await fixedTeachingPoints.blob();
   * console.log(content);
   * ```
   */
  list(query: FixedTeachingPointListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/fixed-teaching-points', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 删除固定教学点
   *
   * @example
   * ```ts
   * const fixedTeachingPoint =
   *   await client.v1.fixedTeachingPoints.delete('id');
   *
   * const content = await fixedTeachingPoint.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/fixed-teaching-points/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取所有启用状态的固定教学点列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.fixedTeachingPoints.listEnabled();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  listEnabled(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/fixed-teaching-points/enabled', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface FixedTeachingPointCreateParams {
  /**
   * 地址
   */
  address: string;

  /**
   * 纬度
   */
  latitude: number | null;

  /**
   * 经度
   */
  longitude: number | null;

  /**
   * 教学点编号
   */
  pointCode: string;

  /**
   * 教学点名称
   */
  pointName: string;

  /**
   * 状态（ENABLED: 启用, DISABLED: 停用）
   */
  status: string | null;

  /**
   * 联系邮箱
   */
  contactEmail?: string | null;

  /**
   * 联系人
   */
  contactPerson?: string | null;

  /**
   * 联系电话
   */
  contactPhone?: string | null;
}

export interface FixedTeachingPointUpdateParams {
  /**
   * 地址
   */
  address?: string | null;

  /**
   * 联系邮箱
   */
  contactEmail?: string | null;

  /**
   * 联系人
   */
  contactPerson?: string | null;

  /**
   * 联系电话
   */
  contactPhone?: string | null;

  /**
   * 纬度
   */
  latitude?: number | null;

  /**
   * 经度
   */
  longitude?: number | null;

  /**
   * 教学点名称
   */
  pointName?: string | null;

  /**
   * 状态
   */
  status?: string | null;
}

export interface FixedTeachingPointListParams {
  page?: number;

  pointCode?: string;

  pointName?: string;

  size?: number;

  status?: string;
}

export declare namespace FixedTeachingPoints {
  export {
    type FixedTeachingPointCreateParams as FixedTeachingPointCreateParams,
    type FixedTeachingPointUpdateParams as FixedTeachingPointUpdateParams,
    type FixedTeachingPointListParams as FixedTeachingPointListParams
  };
}
