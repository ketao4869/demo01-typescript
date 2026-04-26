// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.users.list({
    email: 'email',
    page: 0,
    phone: 'phone',
    realName: 'realName',
    size: 0,
    status: 'status',
    username: 'username',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('register: required and optional params', async () => {
    const response = await client.v1.users.register({
    captchaCode: 'ABCD',
    captchaId: 'uuid-1234-5678',
    confirmPassword: 'password123',
    email: 'test@example.com',
    password: 'password123',
    username: 'testuser',
    orgId: 'orgId',
    phone: '13166991022',
    roleIds: [0, 0],
  });
  });

  // Mock server tests are disabled
  test.skip('resetPassword: required and optional params', async () => {
    const response = await client.v1.users.resetPassword('id', { newPassword: 'newPassword123' });
  });
});
