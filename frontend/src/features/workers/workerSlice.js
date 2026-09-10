import { createSlice } from '@reduxjs/toolkit';
import { fetchAvailableWorkers, fetchNearbyWorkers, fetchWorkerById } from './workerThunks';

const initialState = {
  nearbyWorkers: [],
  availableWorkers: [],
  selectedWorker: null,
  nearbyStatus: 'idle',
  availableStatus: 'idle',
  selectedStatus: 'idle',
  nearbyError: null,
  availableError: null,
  selectedError: null,
};

const workerSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    clearWorkerErrors: (state) => {
      state.nearbyError = null;
      state.availableError = null;
      state.selectedError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearbyWorkers.pending, (state) => {
        state.nearbyStatus = 'loading';
        state.nearbyError = null;
      })
      .addCase(fetchNearbyWorkers.fulfilled, (state, action) => {
        state.nearbyStatus = 'succeeded';
        state.nearbyWorkers = action.payload;
        state.nearbyError = null;
      })
      .addCase(fetchNearbyWorkers.rejected, (state, action) => {
        state.nearbyStatus = 'failed';
        state.nearbyError = action.payload || 'Failed to load nearby workers';
      })
      .addCase(fetchAvailableWorkers.pending, (state) => {
        state.availableStatus = 'loading';
        state.availableError = null;
      })
      .addCase(fetchAvailableWorkers.fulfilled, (state, action) => {
        state.availableStatus = 'succeeded';
        state.availableWorkers = action.payload;
        state.availableError = null;
      })
      .addCase(fetchAvailableWorkers.rejected, (state, action) => {
        state.availableStatus = 'failed';
        state.availableError = action.payload || 'Failed to load available workers';
      })
      .addCase(fetchWorkerById.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(fetchWorkerById.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedWorker = action.payload;
        state.selectedError = null;
      })
      .addCase(fetchWorkerById.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.payload || 'Failed to load selected worker';
      });
  },
});

export const { clearWorkerErrors } = workerSlice.actions;
export default workerSlice.reducer;
