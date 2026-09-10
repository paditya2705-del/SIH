export const mockNotifications = [
  {
    id: 'notif-1001',
    title: 'Technician on the way',
    message: 'Rahul Verma is 12 minutes away from your location.',
    type: 'booking',
    read: false,
    createdAt: '2026-09-09T09:40:00.000Z',
  },
  {
    id: 'notif-1002',
    title: 'Payment confirmed',
    message: 'Your invoice for Kitchen tap repair has been paid successfully.',
    type: 'payment',
    read: false,
    createdAt: '2026-09-09T08:30:00.000Z',
  },
  {
    id: 'notif-1003',
    title: 'New worker available',
    message: 'Two trusted electricians are now available in your area.',
    type: 'worker',
    read: true,
    createdAt: '2026-09-08T17:15:00.000Z',
  },
];

export default mockNotifications;
