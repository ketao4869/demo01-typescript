// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courses', () => {
  // Mock server tests are disabled
  test.skip('bind: required and optional params', async () => {
    const response = await client.v1.tutors.courses.bind('id', { body: [0] });
  });

  // Mock server tests are disabled
  test.skip('unbind: required and optional params', async () => {
    const response = await client.v1.tutors.courses.unbind('courseId', { id: 'id' });
  });
});
