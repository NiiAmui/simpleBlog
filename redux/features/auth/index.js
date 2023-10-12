import { createSlice } from "@reduxjs/toolkit";
import { login } from "./api";

const initialState = {
  isLoading: false,
  isloggedIn: false,
  errorMessage:null,
  userDetails: {},
};

// the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAlt: (state, payload) => {
      console.log("login inputs", payload);
    },
  },
  extraReducers:(builder)=>{
    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.isloggedIn = true;
      state.isLoading = false;
      localStorage.setItem("tokens", JSON.stringify(action.payload.tokens));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = action.error;
      state.isLoading = false;
    });
  }
});

export const { loginAlt } = authSlice.actions;
export default authSlice.reducer