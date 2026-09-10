import { createAsyncThunk } from '@reduxjs/toolkit';
import notificationApi from '../../services/notificationApi';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await notificationApi.getNotifications();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to fetch notifications.'
      );
    }
  }
);

export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (notificationId, { rejectWithValue }) => {
    try {
      const response = await notificationApi.markNotificationAsRead(notificationId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Unable to mark notification as read.'
      );
    }
  }
);
