import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from 'types/User';

type InitialState = {
  isAuth: boolean;
  user: User | null;
};

const initialState: InitialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOut } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;