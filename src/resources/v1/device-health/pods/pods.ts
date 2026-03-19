// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DevicesAPI from './devices';
import { Devices } from './devices';

export class Pods extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
}

Pods.Devices = Devices;

export declare namespace Pods {
  export { Devices as Devices };
}
