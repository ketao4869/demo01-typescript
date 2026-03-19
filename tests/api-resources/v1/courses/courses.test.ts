// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courses', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.courses.create({
      courseName: 'courseName',
      duration: 0,
      hrOrganizationId: 'hrOrganizationId',
      operationUnitId: 'operationUnitId',
      status: 'status',
      content: 'content',
      coverImage: 'coverImage',
      description: 'description',
      price: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.courses.list(
        {
          courseName: 'courseName',
          page: 0,
          size: 0,
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
