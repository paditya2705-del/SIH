import { createAsyncThunk } from '@reduxjs/toolkit';
import bookingApi from '../../services/bookingApi';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await bookingApi.getBookings();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch bookings.'
      );
    }
  }
);

export const fetchBookingById = createAsyncThunk(
  'bookings/fetchBookingById',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await bookingApi.getBookingById(bookingId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch booking.'
      );
    }
  }
);

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await bookingApi.createBooking(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Booking creation failed.'
      );
    }
  }
);

export const updateBookingStatus = createAsyncThunk(
  'bookings/updateBookingStatus',
  async ({ bookingId, status }, { rejectWithValue }) => {
    try {
      const response = await bookingApi.updateBookingStatus({ bookingId, status });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to update booking.'
      );
    }
  }
);

export const cancelBooking = createAsyncThunk(
  'bookings/cancelBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await bookingApi.cancelBooking(bookingId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to cancel booking.'
      );
    }
  }
);
