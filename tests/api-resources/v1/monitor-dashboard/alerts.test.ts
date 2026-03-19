// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alerts', () => {
  // Mock server tests are disabled
  test.skip('retrieveRealtime: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.monitorDashboard.alerts.retrieveRealtime({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
