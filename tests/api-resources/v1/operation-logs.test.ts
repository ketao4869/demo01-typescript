// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operationLogs', () => {
  // Mock server tests are disabled
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.v1.operationLogs.deleteBatch({ ids: 'ids' });
  });

  // Mock server tests are disabled
  test.skip('retrieveOperationLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.operationLogs.retrieveOperationLogs(
        {
          endTime: 'endTime',
          myOnly: true,
          operation: 'operation',
          page: 0,
          size: 0,
          startTime: 'startTime',
          status: 'status',
          username: 'username',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
