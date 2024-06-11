import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserCredentials {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: UserCredentials, thunkAPI) => {
    try {
      const response = await axios.post('https://example.com/api/login', userData);
      return response.data; 
    } catch (error: any) { 
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue('Unknown error occurred');
      }
    }
  }
);

