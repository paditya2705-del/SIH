import { createAsyncThunk } from '@reduxjs/toolkit';
import workerApi from '../../services/workerApi';

export const fetchNearbyWorkers = createAsyncThunk(
  'workers/fetchNearbyWorkers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await workerApi.getNearbyWorkers();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch nearby workers.'
      );
    }
  }
);

export const fetchAvailableWorkers = createAsyncThunk(
  'workers/fetchAvailableWorkers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await workerApi.getAvailableWorkers();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch available workers.'
      );
    }
  }
);

export const fetchWorkerById = createAsyncThunk(
  'workers/fetchWorkerById',
  async (workerId, { rejectWithValue }) => {
    try {
      const response = await workerApi.getWorkerById(workerId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch worker.'
      );
    }
  }
);
