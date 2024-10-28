import { createSlice } from "@reduxjs/toolkit";
import {loginDetails} from "../mockData/LoginDetails"; 

const initialState = {
  isAuthenticated: false,
  userRole: null,
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = loginDetails.find(
        (u) => u.email === email && u.password === password
      );
      
      if (user) {
        state.isAuthenticated = true;
        state.userRole = user.role;
        state.error = null;
        // state.error = "";
        // console.log("User authenticates",user)
      } else {
        state.isAuthenticated = false;
        state.userRole = null;
        state.error = "Invalid credentials";
        // state.error = "Invalid user"

      }
    },
    resetError: (state) => {
      state.error = null;
    }
  },
});

export const { login ,resetError} = authSlice.actions;
export default authSlice.reducer;
