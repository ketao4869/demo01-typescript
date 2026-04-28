// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.roles.create({
      roleCode: 'OPERATION_ADMIN',
      roleName: '运营管理员',
      roleDesc: '负责运营相关工作的管理员',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.roles.list({ page: 0, size: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
