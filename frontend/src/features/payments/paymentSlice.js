import { createSlice } from '@reduxjs/toolkit';
import { createPayment, fetchPaymentByBookingId, fetchPayments } from './paymentThunks';

const initialState = {
  items: [],
  selectedPayment: null,
  status: 'idle',
  selectedStatus: 'idle',
  error: null,
  selectedError: null,
};

const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    clearPaymentError: (state) => {
      state.error = null;
    },
    clearSelectedPayment: (state) => {
      state.selectedPayment = null;
      state.selectedStatus = 'idle';
      state.selectedError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to load payments';
      })
      .addCase(fetchPaymentByBookingId.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(fetchPaymentByBookingId.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedPayment = action.payload;
        state.selectedError = null;
      })
      .addCase(fetchPaymentByBookingId.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.payload || 'Failed to fetch payment';
      })
      .addCase(createPayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.unshift(action.payload);
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Payment creation failed';
      });
  },
});

export const { clearPaymentError, clearSelectedPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
