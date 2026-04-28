// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 设备巡检的增删查和处理接口
 */
export class MaintenanceInspections extends APIResource {
  /**
   * 创建巡检记录
   *
   * @example
   * ```ts
   * const maintenanceInspection =
   *   await client.v1.maintenanceInspections.create({
   *     inspectionTime: '2019-12-27T18:11:19.117Z',
   *     maintenanceId: 'maintenanceId',
   *     podId: 'podId',
   *   });
   *
   * const content = await maintenanceInspection.blob();
   * console.log(content);
   * ```
   */
  create(body: MaintenanceInspectionCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/maintenance-inspections', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取巡检记录详情
   *
   * @example
   * ```ts
   * const maintenanceInspection =
   *   await client.v1.maintenanceInspections.retrieve(0);
   *
   * const content = await maintenanceInspection.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/maintenance-inspections/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取巡检记录列表
   *
   * @example
   * ```ts
   * const maintenanceInspections =
   *   await client.v1.maintenanceInspections.list();
   *
   * const content = await maintenanceInspections.blob();
   * console.log(content);
   * ```
   */
  list(
    query: MaintenanceInspectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/maintenance-inspections', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 取消巡检
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.maintenanceInspections.cancel(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  cancel(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-inspections/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 完成巡检
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.maintenanceInspections.complete(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  complete(
    id: number,
    body: MaintenanceInspectionCompleteParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-inspections/${id}/complete`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 开始巡检
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.maintenanceInspections.start(0);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  start(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-inspections/${id}/start`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取巡检统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.maintenanceInspections.statistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  statistics(
    query: MaintenanceInspectionStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/maintenance-inspections/statistics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface MaintenanceInspectionCreateParams {
  /**
   * 计划巡检时间
   */
  inspectionTime: string;

  /**
   * 运维人员 ID
   */
  maintenanceId: string;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 巡检项目 JSON
   */
  inspectionItems?: string | null;
}

export interface MaintenanceInspectionListParams {
  inspectionStatus?: number;

  maintenanceId?: number;

  page?: number;

  podId?: number;

  size?: number;
}

export interface MaintenanceInspectionCompleteParams {
  /**
   * 异常项目
   */
  abnormalItems?: string | null;

  /**
   * 巡检结果
   */
  inspectionResult?: string | null;

  /**
   * 照片 JSON
   */
  photos?: string | null;
}

export interface MaintenanceInspectionStatisticsParams {
  /**
   * 实训舱 ID（可选）
   */
  podId?: number;
}

export declare namespace MaintenanceInspections {
  export {
    type MaintenanceInspectionCreateParams as MaintenanceInspectionCreateParams,
    type MaintenanceInspectionListParams as MaintenanceInspectionListParams,
    type MaintenanceInspectionCompleteParams as MaintenanceInspectionCompleteParams,
    type MaintenanceInspectionStatisticsParams as MaintenanceInspectionStatisticsParams,
  };
}
