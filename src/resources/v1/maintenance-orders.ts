// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 运维工单的增删查和处理接口
 */
export class MaintenanceOrders extends APIResource {
  /**
   * 创建工单
   *
   * @example
   * ```ts
   * const maintenanceOrder =
   *   await client.v1.maintenanceOrders.create({
   *     faultDesc: 'faultDesc',
   *     faultLevel: 0,
   *     faultType: 'faultType',
   *     podId: 'podId',
   *     priority: 0,
   *   });
   *
   * const content = await maintenanceOrder.blob();
   * console.log(content);
   * ```
   */
  create(body: MaintenanceOrderCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/maintenance-orders', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取工单详情
   *
   * @example
   * ```ts
   * const maintenanceOrder =
   *   await client.v1.maintenanceOrders.retrieve(0);
   *
   * const content = await maintenanceOrder.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/maintenance-orders/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取工单列表
   *
   * @example
   * ```ts
   * const maintenanceOrders =
   *   await client.v1.maintenanceOrders.list();
   *
   * const content = await maintenanceOrders.blob();
   * console.log(content);
   * ```
   */
  list(
    query: MaintenanceOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/maintenance-orders', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 分配工单
   *
   * @example
   * ```ts
   * const response = await client.v1.maintenanceOrders.assign(
   *   0,
   *   { maintenanceId: 'maintenanceId' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  assign(id: number, body: MaintenanceOrderAssignParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-orders/${id}/assign`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 关闭工单
   *
   * @example
   * ```ts
   * const response = await client.v1.maintenanceOrders.close(
   *   0,
   *   { handleResult: 'handleResult' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  close(id: number, body: MaintenanceOrderCloseParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-orders/${id}/close`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 升级工单
   *
   * @example
   * ```ts
   * const response = await client.v1.maintenanceOrders.escalate(
   *   0,
   *   { upgradeReason: 'upgradeReason' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  escalate(id: number, body: MaintenanceOrderEscalateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-orders/${id}/escalate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 开始处理工单
   *
   * @example
   * ```ts
   * const response = await client.v1.maintenanceOrders.process(
   *   0,
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  process(id: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/maintenance-orders/${id}/process`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取工单统计
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.maintenanceOrders.statistics();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  statistics(
    query: MaintenanceOrderStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/maintenance-orders/statistics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface MaintenanceOrderCreateParams {
  /**
   * 故障描述
   */
  faultDesc: string;

  /**
   * 故障级别：1=严重，2=重要，3=一般，4=轻微
   */
  faultLevel: number;

  /**
   * 故障类型
   */
  faultType: string;

  /**
   * 实训舱 ID
   */
  podId: string;

  /**
   * 优先级：1=紧急，2=高，3=中，4=低
   */
  priority: number;

  /**
   * 来源告警 ID
   */
  alertId?: number | string | null;

  /**
   * 设备 ID（可选）
   */
  deviceId?: number | string | null;

  /**
   * 工单来源：1=告警自动，2=手动创建，3=学员报修
   */
  orderSource?: number | null;

  /**
   * 学员 ID（学员报修时）
   */
  studentId?: number | string | null;
}

export interface MaintenanceOrderListParams {
  maintenanceId?: number;

  orderStatus?: number;

  page?: number;

  podId?: number;

  size?: number;
}

export interface MaintenanceOrderAssignParams {
  /**
   * 运维人员 ID
   */
  maintenanceId: string;
}

export interface MaintenanceOrderCloseParams {
  /**
   * 处理结果
   */
  handleResult: string;

  /**
   * 满意度评分（1-5）
   */
  satisfactionScore?: number | null;

  /**
   * 学员反馈
   */
  studentFeedback?: string | null;
}

export interface MaintenanceOrderEscalateParams {
  /**
   * 升级原因
   */
  upgradeReason: string;

  /**
   * 升级后的运维人员 ID
   */
  upgradedMaintenanceId?: string;
}

export interface MaintenanceOrderStatisticsParams {
  /**
   * 运维人员 ID（可选）
   */
  maintenanceId?: number;

  /**
   * 实训舱 ID（可选）
   */
  podId?: number;
}

export declare namespace MaintenanceOrders {
  export {
    type MaintenanceOrderCreateParams as MaintenanceOrderCreateParams,
    type MaintenanceOrderListParams as MaintenanceOrderListParams,
    type MaintenanceOrderAssignParams as MaintenanceOrderAssignParams,
    type MaintenanceOrderCloseParams as MaintenanceOrderCloseParams,
    type MaintenanceOrderEscalateParams as MaintenanceOrderEscalateParams,
    type MaintenanceOrderStatisticsParams as MaintenanceOrderStatisticsParams,
  };
}
