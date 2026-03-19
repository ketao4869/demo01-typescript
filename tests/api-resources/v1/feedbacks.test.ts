// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedbacks', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.feedbacks.create({
      content: 'x',
      feedbackType: 0,
      contactInfo: 'contactInfo',
      images: 'images',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.feedbacks.list(
        {
          feedbackType: 0,
          page: 0,
          size: 0,
          status: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('process: required and optional params', async () => {
    const response = await client.v1.feedbacks.process('id', { processResult: 'x' });
  });
});
