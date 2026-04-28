// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource faqs', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.faqs.create({
      answer: 'x',
      question: 'x',
      sort: 0,
      status: 0,
      category: 'category',
    });
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.faqs.update('id', {
      answer: 'x',
      question: 'x',
      sort: 0,
      status: 0,
      category: 'category',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.faqs.list(
        {
          category: 'category',
          page: 0,
          size: 0,
          status: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
