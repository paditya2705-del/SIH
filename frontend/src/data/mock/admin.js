export const mockAdminOverview = {
  stats: [
    { label: 'Bookings', value: '428', trend: '+12%' },
    { label: 'Completed', value: '391', trend: '+8%' },
    { label: 'Unassigned', value: '12', trend: '-3%' },
    { label: 'Complaints', value: '31', trend: '-2%' },
  ],
  fairnessData: [
    { name: 'Plumbing', value: 86 },
    { name: 'Electrical', value: 72 },
    { name: 'AC', value: 68 },
    { name: 'Cleaning', value: 80 },
  ],
  forecast: [
    { name: 'AC repair', value: '31%', tone: 'rose' },
    { name: 'Plumbing', value: '18%', tone: 'amber' },
    { name: 'Electrical', value: '12%', tone: 'indigo' },
    { name: 'Painting', value: '↓ 4%', tone: 'slate' },
  ],
  alertMessage:
    'Zone 3 is expected to face an AC technician shortage. Recommend redeploying 3 workers from Zone 2 and scheduling 2 training slots.',
};

export default mockAdminOverview;
