import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signOut(state) {
      state.isAuthenticated = false;
      state.token = null;
      window.localStorage.setItem('token', '');
    },
    signin(state, action) {
      const token = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      window.localStorage.setItem('token', token);
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
