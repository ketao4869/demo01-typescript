// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource practiceRecords', () => {
  // Mock server tests are disabled
  test.skip('practiceRecords: required and optional params', async () => {
    const response = await client.v1.practiceRecords.practiceRecords({
    duration: 0,
    podId: 'podId',
    studentId: 'studentId',
    content: 'content',
    courseId: 0,
    deviceUsage: 'deviceUsage',
    videoUrl: 'videoUrl',
  });
  });

  // Mock server tests are disabled
  test.skip('retrievePracticeRecords: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.practiceRecords.retrievePracticeRecords({
    courseId: 0,
    page: 0,
    podId: 0,
    size: 0,
    studentId: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.practiceRecords.retrieveStatistics({ studentId: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });
});
