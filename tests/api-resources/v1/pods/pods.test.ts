// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource pods', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.pods.create({
    podCode: 'POD001',
    podName: '实训舱一号',
    podType: 'MOBILE',
    status: 'ENABLED',
    workMode: 'IDLE',
    address: '北京市东城区',
    deviceIds: [0],
    fixedPointId: 1234567890,
    latitude: 39.90403,
    longitude: 116.407526,
    supportedCourseIds: [0],
  });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.pods.list({
    fixedPointId: 0,
    page: 0,
    podCode: 'podCode',
    podName: 'podName',
    podType: 'podType',
    size: 0,
    status: 'status',
    workMode: 'workMode',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });
});
