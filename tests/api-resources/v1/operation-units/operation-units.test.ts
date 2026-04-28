// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operationUnits', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.operationUnits.create({
      contactPerson: '张三',
      contactPhone: 'contactPhone',
      unitName: '华东运营中心',
      address: '上海市浦东新区',
      businessLicense: 'businessLicense',
      contactEmail: 'contact@example.com',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.operationUnits.list(
        {
          page: 0,
          size: 0,
          status: 'status',
          unitName: 'unitName',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('lock: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.operationUnits.lock('id', { reason: 'reason' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
