import { createSlice } from '@reduxjs/toolkit';
import { fetchServiceById, fetchServices } from './serviceThunks';

const initialState = {
  items: [],
  selectedService: null,
  status: 'idle',
  selectedStatus: 'idle',
  error: null,
  selectedError: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    clearServiceError: (state) => {
      state.error = null;
    },
    clearSelectedService: (state) => {
      state.selectedService = null;
      state.selectedStatus = 'idle';
      state.selectedError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to load services';
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedService = action.payload;
        state.selectedError = null;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.payload || 'Failed to load selected service';
      });
  },
});

export const { clearServiceError, clearSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;
