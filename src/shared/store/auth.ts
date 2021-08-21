import { createSlice } from '@reduxjs/toolkit';
import { User } from 'shared/models/user';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: null,
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
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
