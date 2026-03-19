// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Demo01 from 'demo01';

const client = new Demo01({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource maintenanceOrders', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.maintenanceOrders.create({
      faultDesc: 'faultDesc',
      faultLevel: 0,
      faultType: 'faultType',
      podId: 'podId',
      priority: 0,
      alertId: 0,
      deviceId: 0,
      orderSource: 0,
      studentId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.maintenanceOrders.list(
        {
          maintenanceId: 0,
          orderStatus: 0,
          page: 0,
          podId: 0,
          size: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('assign: required and optional params', async () => {
    const response = await client.v1.maintenanceOrders.assign(0, { maintenanceId: 'maintenanceId' });
  });

  // Mock server tests are disabled
  test.skip('close: required and optional params', async () => {
    const response = await client.v1.maintenanceOrders.close(0, {
      handleResult: 'handleResult',
      satisfactionScore: 0,
      studentFeedback: 'studentFeedback',
    });
  });

  // Mock server tests are disabled
  test.skip('escalate: required and optional params', async () => {
    const response = await client.v1.maintenanceOrders.escalate(0, {
      upgradeReason: 'upgradeReason',
      upgradedMaintenanceId: 'upgradedMaintenanceId',
    });
  });

  // Mock server tests are disabled
  test.skip('statistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.maintenanceOrders.statistics(
        { maintenanceId: 0, podId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Demo01.NotFoundError);
  });
});
