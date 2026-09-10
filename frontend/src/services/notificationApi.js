import { mockNotifications } from '../data/mock/notifications';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const notificationApi = {
  getNotifications: async () => {
    await delay(400);
    return {
      data: mockNotifications,
    };
  },

  markNotificationAsRead: async (notificationId) => {
    await delay(250);
    const notification = mockNotifications.find((item) => item.id === notificationId);

    if (!notification) {
      throw new Error('Notification not found.');
    }

    return {
      data: {
        ...notification,
        read: true,
      },
    };
  },
};

export default notificationApi;
