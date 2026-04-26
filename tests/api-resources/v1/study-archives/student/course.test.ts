// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource course', () => {
  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.studyArchives.student.course.retrieve('courseId', { studentId: 'studentId' });
  });

  // Mock server tests are disabled
  test.skip('updateStudyTime: required and optional params', async () => {
    const response = await client.v1.studyArchives.student.course.updateStudyTime('courseId', { studentId: 'studentId', minutes: 0 });
  });
});
