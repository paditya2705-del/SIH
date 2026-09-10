import { mockPayments } from '../data/mock/payments';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const paymentApi = {
  getPayments: async () => {
    await delay(400);
    return {
      data: mockPayments,
    };
  },

  getPaymentByBookingId: async (bookingId) => {
    await delay(250);
    const payment = mockPayments.find((item) => item.bookingId === bookingId);

    return {
      data: payment || null,
    };
  },

  createPayment: async (payload) => {
    await delay(500);
    const newPayment = {
      id: `pay-${Date.now()}`,
      bookingId: payload.bookingId,
      serviceName: payload.serviceName || 'Service booking',
      workerName: payload.workerName || 'Worker',
      workerRole: payload.workerRole || 'Professional',
      amount: payload.amount || 0,
      serviceCharge: payload.serviceCharge || 0,
      urgencyFee: payload.urgencyFee || 0,
      welfareContribution: payload.welfareContribution || 0,
      paymentMethod: payload.paymentMethod || 'UPI',
      status: 'PAID',
      eta: payload.eta || 15,
      createdAt: new Date().toISOString(),
    };

    return {
      data: newPayment,
    };
  },
};

export default paymentApi;
