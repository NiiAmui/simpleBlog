import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstance";

export const login = createAsyncThunk(
    "auth/login",
    async (payload, thunkAPI) => {
      try {
        const resp = await axiosInstance.post("/auth/login/", payload);
        return resp.data;
      } catch (error) {
        if (!error.response) {
          throw error;
        }
        if (!error.status) {
          return thunkAPI.rejectWithValue("Network Error");
        }
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const register = createAsyncThunk(
    "auth/register",
    async (payload, thunkAPI) => {
      try {
        const resp = await axiosInstance.post("/auth/signup", payload);
        console.log('registering payload',payload);
        return resp.data;
      } catch (error) {
        if (!error.response) {
          throw error;
        }
        if (!error.status) {
          return thunkAPI.rejectWithValue("Network Error");
        }
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );