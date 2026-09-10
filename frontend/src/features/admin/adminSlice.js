import { createSlice } from '@reduxjs/toolkit';
import { fetchAdminOverview } from './adminThunks';

const initialState = {
  overview: null,
  status: 'idle',
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminOverview.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAdminOverview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.overview = action.payload;
        state.error = null;
      })
      .addCase(fetchAdminOverview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch admin overview';
      });
  },
});

export const { clearAdminError } = adminSlice.actions;
export default adminSlice.reducer;
