// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource timeSlots', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.create('podId', {
      endTime: 'endTime',
      podId: 'podId',
      slotDate: '2019-12-27',
      startTime: 'startTime',
      status: 'status',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.retrieve('id', { podId: 'podId' });
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.list('podId', { date: '2019-12-27' });
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.delete('id', { podId: 'podId' });
  });

  // Mock server tests are disabled
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.createBatch('podId', {
      endDate: '2019-12-27',
      endTime: 'endTime',
      podId: 'podId',
      startDate: '2019-12-27',
      startTime: 'startTime',
      slotDuration: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('lock: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.lock('id', { podId: 'podId', reason: 'reason' });
  });

  // Mock server tests are disabled
  test.skip('unlock: required and optional params', async () => {
    const response = await client.v1.pods.timeSlots.unlock('id', { podId: 'podId' });
  });
});
