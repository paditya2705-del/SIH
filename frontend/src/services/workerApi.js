import { mockWorkers } from '../data/mock/workers';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const workerApi = {
  getNearbyWorkers: async () => {
    await delay(500);
    return {
      data: mockWorkers,
    };
  },

  getAvailableWorkers: async () => {
    await delay(500);
    return {
      data: mockWorkers,
    };
  },

  getWorkerById: async (workerId) => {
    await delay(250);
    const worker = mockWorkers.find((item) => item.id === workerId);

    return {
      data: worker || null,
    };
  },
};

export default workerApi;
