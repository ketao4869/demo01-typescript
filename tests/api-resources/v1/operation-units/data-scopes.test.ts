// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dataScopes', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.operationUnits.dataScopes.create('id', {
      body: [{ resourceType: 'POD', scopeType: 2 }],
    });
  });
});
