import { createAsyncThunk } from '@reduxjs/toolkit';
import paymentApi from '../../services/paymentApi';

export const fetchPayments = createAsyncThunk(
  'payments/fetchPayments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await paymentApi.getPayments();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch payments.'
      );
    }
  }
);

export const fetchPaymentByBookingId = createAsyncThunk(
  'payments/fetchPaymentByBookingId',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await paymentApi.getPaymentByBookingId(bookingId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch payment.'
      );
    }
  }
);

export const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await paymentApi.createPayment(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to create payment.'
      );
    }
  }
);
