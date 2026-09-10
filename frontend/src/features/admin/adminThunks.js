import { createAsyncThunk } from '@reduxjs/toolkit';
import adminApi from '../../services/adminApi';

export const fetchAdminOverview = createAsyncThunk(
  'admin/fetchAdminOverview',
  async (_, { rejectWithValue }) => {
    try {
      const response = await adminApi.getOverview();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch admin overview.'
      );
    }
  }
);
