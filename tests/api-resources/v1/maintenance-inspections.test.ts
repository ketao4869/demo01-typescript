// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource maintenanceInspections', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.maintenanceInspections.create({
      inspectionTime: '2019-12-27T18:11:19.117Z',
      maintenanceId: 'maintenanceId',
      podId: 'podId',
      inspectionItems: 'inspectionItems',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.maintenanceInspections.list(
        {
          inspectionStatus: 0,
          maintenanceId: 0,
          page: 0,
          podId: 0,
          size: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('statistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.maintenanceInspections.statistics({ podId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
