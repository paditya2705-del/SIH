import { createSlice } from '@reduxjs/toolkit';
import {
  cancelBooking,
  createBooking,
  fetchBookingById,
  fetchBookings,
  updateBookingStatus,
} from './bookingThunks';

const initialState = {
  items: [],
  selectedBooking: null,
  status: 'idle',
  selectedStatus: 'idle',
  error: null,
  selectedError: null,
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    clearBookingError: (state) => {
      state.error = null;
    },
    clearSelectedBooking: (state) => {
      state.selectedBooking = null;
      state.selectedStatus = 'idle';
      state.selectedError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to load bookings';
      })
      .addCase(fetchBookingById.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedBooking = action.payload;
        state.selectedError = null;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.payload || 'Failed to fetch booking';
      })
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.unshift(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Booking creation failed';
      })
      .addCase(updateBookingStatus.fulfilled, (state, action) => {
        state.items = state.items.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        );

        if (state.selectedBooking?.id === action.payload.id) {
          state.selectedBooking = action.payload;
        }
      })
      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.items = state.items.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        );

        if (state.selectedBooking?.id === action.payload.id) {
          state.selectedBooking = action.payload;
        }
      });
  },
});

export const { clearBookingError, clearSelectedBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
