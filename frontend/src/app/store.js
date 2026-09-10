import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../features/admin/adminSlice';
import authReducer from '../features/auth/authSlice';
import bookingReducer from '../features/bookings/bookingSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import paymentReducer from '../features/payments/paymentSlice';
import serviceReducer from '../features/services/serviceSlice';
import workerReducer from '../features/workers/workerSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    auth: authReducer,
    bookings: bookingReducer,
    notifications: notificationReducer,
    payments: paymentReducer,
    services: serviceReducer,
    workers: workerReducer,
  },
});

export default store;
