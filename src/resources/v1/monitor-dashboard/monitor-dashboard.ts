// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AlertsAPI from './alerts';
import { AlertRetrieveRealtimeParams, Alerts } from './alerts';
import * as HealthAPI from './health';
import { Health } from './health';
import * as OperationAPI from './operation';
import { Operation } from './operation';
import * as PodsAPI from './pods';
import { Pods } from './pods';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 监控大屏数据接口
 */
export class MonitorDashboard extends APIResource {
  pods: PodsAPI.Pods = new PodsAPI.Pods(this._client);
  operation: OperationAPI.Operation = new OperationAPI.Operation(this._client);
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);

  /**
   * 获取总览数据
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.monitorDashboard.retrieveOverview();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveOverview(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/monitor-dashboard/overview', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

MonitorDashboard.Pods = Pods;
MonitorDashboard.Operation = Operation;
MonitorDashboard.Health = Health;
MonitorDashboard.Alerts = Alerts;

export declare namespace MonitorDashboard {
  export {
    Pods as Pods
  };

  export {
    Operation as Operation
  };

  export {
    Health as Health
  };

  export {
    Alerts as Alerts,
    type AlertRetrieveRealtimeParams as AlertRetrieveRealtimeParams
  };
}
