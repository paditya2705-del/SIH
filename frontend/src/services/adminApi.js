import { mockAdminOverview } from '../data/mock/admin';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const adminApi = {
  getOverview: async () => {
    await delay(500);
    return {
      data: mockAdminOverview,
    };
  },
};

export default adminApi;
