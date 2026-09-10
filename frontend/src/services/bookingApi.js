import { mockBookings } from '../data/mock/bookings';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const bookingApi = {
  getBookings: async () => {
    await delay(500);
    return {
      data: mockBookings,
    };
  },

  getBookingById: async (bookingId) => {
    await delay(250);
    const booking = mockBookings.find((item) => item.id === bookingId);

    return {
      data: booking || null,
    };
  },

  createBooking: async (payload) => {
    await delay(500);
    const newBooking = {
      id: `bk-${Date.now()}`,
      ...payload,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };

    return {
      data: newBooking,
    };
  },

  updateBookingStatus: async ({ bookingId, status }) => {
    await delay(400);
    const booking = mockBookings.find((item) => item.id === bookingId);

    if (!booking) {
      throw new Error('Booking not found.');
    }

    return {
      data: {
        ...booking,
        status,
      },
    };
  },

  cancelBooking: async (bookingId) => {
    await delay(300);
    const booking = mockBookings.find((item) => item.id === bookingId);

    if (!booking) {
      throw new Error('Booking not found.');
    }

    return {
      data: {
        ...booking,
        status: 'CANCELLED',
      },
    };
  },
};

export default bookingApi;
