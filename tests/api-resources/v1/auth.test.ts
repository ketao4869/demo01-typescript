// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('forgotPassword: required and optional params', async () => {
    const response = await client.v1.auth.forgotPassword({ email: 'user@example.com' });
  });

  // Mock server tests are disabled
  test.skip('forgotPasswordByPhone: required and optional params', async () => {
    const response = await client.v1.auth.forgotPasswordByPhone({ phone: 'phone' });
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.v1.auth.login({
      captchaId: 'uuid-123456',
      username: 'admin',
      captchaCode: 'captchaCode',
      password: 'password',
    });
  });

  // Mock server tests are disabled
  test.skip('resetPasswordByToken: required and optional params', async () => {
    const response = await client.v1.auth.resetPasswordByToken({
      token: 'reset-token-uuid-123',
      newPassword: 'newPassword456',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePassword: required and optional params', async () => {
    const response = await client.v1.auth.updatePassword({
      newPassword: 'newPassword456',
      oldPassword: 'oldPassword123',
    });
  });
});
