export const mockPayments = [
  {
    id: 'pay-1001',
    bookingId: 'bk-1001',
    serviceName: 'Kitchen tap repair',
    workerName: 'Rahul Verma',
    workerRole: 'Plumber',
    amount: 530,
    serviceCharge: 450,
    urgencyFee: 80,
    welfareContribution: 42,
    paymentMethod: 'UPI',
    status: 'PAID',
    eta: 12,
    createdAt: '2026-09-09T09:40:00.000Z',
  },
  {
    id: 'pay-1002',
    bookingId: 'bk-1002',
    serviceName: 'Fan installation',
    workerName: 'Amit Singh',
    workerRole: 'Electrician',
    amount: 620,
    serviceCharge: 520,
    urgencyFee: 60,
    welfareContribution: 40,
    paymentMethod: 'CARD',
    status: 'PENDING',
    eta: 25,
    createdAt: '2026-09-08T18:25:00.000Z',
  },
];

export default mockPayments;
