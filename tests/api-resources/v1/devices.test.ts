// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource devices', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.devices.create({
    deviceName: 'deviceName',
    deviceType: 'deviceType',
    podId: 0,
    status: 'status',
    manufacturer: 'manufacturer',
    model: 'model',
    params: 'params',
    purchaseDate: '2019-12-27T18:11:19.117Z',
    warrantyEndDate: '2019-12-27T18:11:19.117Z',
  });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.devices.list({
    deviceName: 'deviceName',
    deviceType: 'deviceType',
    page: 0,
    size: 0,
    status: 'status',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });
});
