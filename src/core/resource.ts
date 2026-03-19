// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Demo01 } from '../client';

export abstract class APIResource {
  protected _client: Demo01;

  constructor(client: Demo01) {
    this._client = client;
  }
}
