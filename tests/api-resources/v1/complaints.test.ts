// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource complaints', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.complaints.create({
      complaintType: 0,
      content: 'x',
      contactInfo: 'contactInfo',
      evidenceImages: 'evidenceImages',
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.complaints.list(
        {
          complaintType: 0,
          page: 0,
          size: 0,
          status: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateProcess: required and optional params', async () => {
    const response = await client.v1.complaints.updateProcess('id', { processResult: 'x', status: 0 });
  });
});
