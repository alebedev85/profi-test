import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import authReducer from './slices/authSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;