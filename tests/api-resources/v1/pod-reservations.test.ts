// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'ketao';

const client = new Demo01({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource podReservations', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.podReservations.create({
    endTime: 'endTime',
    podId: 'podId',
    reservationDate: '2019-12-27',
    reservationType: 0,
    slotId: 0,
    startTime: 'startTime',
    studentId: 'studentId',
    courseId: 0,
  });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.podReservations.list({
    page: 0,
    podId: 0,
    reservationDate: '2019-12-27',
    size: 0,
    studentId: 0,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Demo01.NotFoundError);
  });
});
