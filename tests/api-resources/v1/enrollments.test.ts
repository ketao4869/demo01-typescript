// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource enrollments', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.enrollments.create({
    courseId: 'courseId',
    operationUnitId: 'operationUnitId',
    studentId: 'studentId',
  });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.enrollments.list({
    auditStatus: 0,
    courseId: 0,
    page: 0,
    size: 0,
    studentId: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('audit: required and optional params', async () => {
    const response = await client.v1.enrollments.audit('id', { auditStatus: 0, auditRemark: 'auditRemark' });
  });
});
