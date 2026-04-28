// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fixedTeachingPoints', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.fixedTeachingPoints.create({
      address: '北京市朝阳区',
      latitude: 39.90403,
      longitude: 116.407526,
      pointCode: 'FP001',
      pointName: '北京培训中心',
      status: 'ENABLED',
      contactEmail: 'contactEmail',
      contactPerson: 'contactPerson',
      contactPhone: 'contactPhone',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.fixedTeachingPoints.list(
        {
          page: 0,
          pointCode: 'pointCode',
          pointName: 'pointName',
          size: 0,
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
