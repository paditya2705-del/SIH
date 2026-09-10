import axiosInstance from './axiosInstance';
import { mockServices } from '../data/mock/services';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const serviceApi = {
  getServices: async () => {
    await delay(500);
    return {
      data: mockServices,
    };
  },

  getServiceById: async (serviceId) => {
    await delay(250);
    const service = mockServices.find((item) => item.id === serviceId);

    return {
      data: service || null,
    };
  },
};

export default serviceApi;
