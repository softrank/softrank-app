import { createSlice } from '@reduxjs/toolkit';
import { User } from 'shared/Types/user';

interface AuthState {
  isAuthenticated: boolean;
  authToken: string | null;
  roles: Array<any>;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authToken: localStorage.getItem('authToken'),
  roles: [],
  user: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signOut(state) {
      state.isAuthenticated = false;
      state.authToken = null;
      window.localStorage.setItem('authToken', '');
    },
    signin(state, action) {
      const { authToken, roles } = action.payload;
      state.isAuthenticated = true;
      state.authToken = authToken;
      state.roles = roles;
      window.localStorage.setItem('authToken', authToken);
    },
    setToken(state, action) {
      const authToken = action.payload;
      state.isAuthenticated = true;
      state.authToken = authToken;
      window.localStorage.setItem('authToken', authToken);
    },
    setRoles(state, action) {
      const roles = action.payload;
      state.roles = roles;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
