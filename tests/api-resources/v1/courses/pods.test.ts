// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pods', () => {
  // Mock server tests are disabled
  test.skip('bind: required and optional params', async () => {
    const response = await client.v1.courses.pods.bind('id', { body: [0] });
  });
});
