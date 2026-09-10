import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/serviceApi';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await serviceApi.getServices();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch services.'
      );
    }
  }
);

export const fetchServiceById = createAsyncThunk(
  'services/fetchServiceById',
  async (serviceId, { rejectWithValue }) => {
    try {
      const response = await serviceApi.getServiceById(serviceId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch that service.'
      );
    }
  }
);
