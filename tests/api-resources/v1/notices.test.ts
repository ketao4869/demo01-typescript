// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notices', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.notices.create({
      content: 'x',
      publishStatus: 0,
      targetType: 0,
      title: 'x',
      targetIds: 'targetIds',
    });
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.notices.update('id', {
      content: 'x',
      publishStatus: 0,
      targetType: 0,
      title: 'x',
      targetIds: 'targetIds',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.notices.list(
        {
          page: 0,
          publishStatus: 0,
          size: 0,
          title: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
