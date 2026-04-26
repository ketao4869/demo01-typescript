// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DataScopesAPI from './data-scopes';
import { DataScopeCreateParams, DataScopes } from './data-scopes';
import * as PodsAPI from './pods';
import { PodCreateParams, Pods } from './pods';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 运营单位的增删改查接口
 */
export class OperationUnits extends APIResource {
  pods: PodsAPI.Pods = new PodsAPI.Pods(this._client);
  dataScopes: DataScopesAPI.DataScopes = new DataScopesAPI.DataScopes(this._client);

  /**
   * 创建新的运营单位
   *
   * @example
   * ```ts
   * const operationUnit = await client.v1.operationUnits.create(
   *   {
   *     contactPerson: '张三',
   *     contactPhone: 'contactPhone',
   *     unitName: '华东运营中心',
   *   },
   * );
   *
   * const content = await operationUnit.blob();
   * console.log(content);
   * ```
   */
  create(body: OperationUnitCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/operation-units', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据运营单位 ID 查询详细信息
   *
   * @example
   * ```ts
   * const operationUnit =
   *   await client.v1.operationUnits.retrieve('id');
   *
   * const content = await operationUnit.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/operation-units/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 更新运营单位信息
   *
   * @example
   * ```ts
   * const operationUnit = await client.v1.operationUnits.update(
   *   'id',
   * );
   *
   * const content = await operationUnit.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: OperationUnitUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/operation-units/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询运营单位列表，page 从 1 开始，size 范围 1–100
   *
   * @example
   * ```ts
   * const operationUnits =
   *   await client.v1.operationUnits.list();
   *
   * const content = await operationUnits.blob();
   * console.log(content);
   * ```
   */
  list(query: OperationUnitListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/operation-units', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据 ID 删除运营单位
   *
   * @example
   * ```ts
   * const operationUnit = await client.v1.operationUnits.delete(
   *   'id',
   * );
   *
   * const content = await operationUnit.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/operation-units/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取启用状态的运营单位列表
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.operationUnits.listEnabled();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  listEnabled(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/operation-units/enabled', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 锁定指定运营单位
   *
   * @example
   * ```ts
   * const response = await client.v1.operationUnits.lock('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  lock(id: string, params: OperationUnitLockParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    const { reason } = params ?? {}
    return this._client.put(path`/api/v1/operation-units/${id}/lock`, { query: { reason }, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 解锁指定运营单位
   *
   * @example
   * ```ts
   * const response = await client.v1.operationUnits.unlock(
   *   'id',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  unlock(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/operation-units/${id}/unlock`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface OperationUnitCreateParams {
  /**
   * 联系人
   */
  contactPerson: string | null;

  /**
   * 联系电话
   */
  contactPhone: string | null;

  /**
   * 单位名称
   */
  unitName: string;

  /**
   * 地址
   */
  address?: string | null;

  /**
   * 营业执照 URL
   */
  businessLicense?: string | null;

  /**
   * 联系邮箱
   */
  contactEmail?: string | null;
}

export interface OperationUnitUpdateParams {
  /**
   * 地址
   */
  address?: string | null;

  /**
   * 营业执照 URL
   */
  businessLicense?: string | null;

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
   * 单位名称
   */
  unitName?: string | null;
}

export interface OperationUnitListParams {
  page?: number;

  size?: number;

  status?: string;

  unitName?: string;
}

export interface OperationUnitLockParams {
  reason?: string;
}

OperationUnits.Pods = Pods;
OperationUnits.DataScopes = DataScopes;

export declare namespace OperationUnits {
  export {
    type OperationUnitCreateParams as OperationUnitCreateParams,
    type OperationUnitUpdateParams as OperationUnitUpdateParams,
    type OperationUnitListParams as OperationUnitListParams,
    type OperationUnitLockParams as OperationUnitLockParams
  };

  export {
    Pods as Pods,
    type PodCreateParams as PodCreateParams
  };

  export {
    DataScopes as DataScopes,
    type DataScopeCreateParams as DataScopeCreateParams
  };
}
