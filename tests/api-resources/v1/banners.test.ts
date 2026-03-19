// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource banners', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.banners.create({
      imageUrl: 'x',
      position: 0,
      sort: 0,
      status: 0,
      title: 'x',
      linkUrl: 'linkUrl',
    });
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.banners.update('id', {
      imageUrl: 'x',
      position: 0,
      sort: 0,
      status: 0,
      title: 'x',
      linkUrl: 'linkUrl',
    });
  });
});
