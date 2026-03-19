// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 操作日志列表查询接口
 */
export class OperationLogs extends APIResource {
  /**
   * 根据 ID 删除单条操作日志
   *
   * @example
   * ```ts
   * const operationLog = await client.v1.operationLogs.delete(
   *   'id',
   * );
   *
   * const content = await operationLog.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/operation-logs/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 根据 ID 列表批量删除操作日志
   *
   * @example
   * ```ts
   * const response = await client.v1.operationLogs.deleteBatch({
   *   ids: 'ids',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  deleteBatch(params: OperationLogDeleteBatchParams, options?: RequestOptions): APIPromise<Response> {
    const { ids } = params;
    return this._client.delete('/api/v1/operation-logs/batch', {
      query: { ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 清空所有操作日志
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.operationLogs.deleteClear();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  deleteClear(options?: RequestOptions): APIPromise<Response> {
    return this._client.delete('/api/v1/operation-logs/clear', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 分页查询。myOnly=true 时仅返回当前登录用户的操作记录（我的操作日志）
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.operationLogs.retrieveOperationLogs();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveOperationLogs(
    query: OperationLogRetrieveOperationLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/operation-logs', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 返回配置的日志保留天数，用于前端展示或归档策略
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.operationLogs.retrieveRetentionConfig();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveRetentionConfig(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/operation-logs/retention-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 返回今日操作数、活跃用户数、异常操作数、总操作数
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.operationLogs.retrieveStats();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStats(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/operation-logs/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface OperationLogDeleteBatchParams {
  ids: string;
}

export interface OperationLogRetrieveOperationLogsParams {
  endTime?: string;

  myOnly?: boolean;

  operation?: string;

  page?: number;

  size?: number;

  startTime?: string;

  status?: string;

  username?: string;
}

export declare namespace OperationLogs {
  export {
    type OperationLogDeleteBatchParams as OperationLogDeleteBatchParams,
    type OperationLogRetrieveOperationLogsParams as OperationLogRetrieveOperationLogsParams,
  };
}
