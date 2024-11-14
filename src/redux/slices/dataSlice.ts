import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DataType, data } from 'assets/data/DATA';

type InitialState = {
  data: DataType | null;
};

const initialState: InitialState = {
  data: data,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataType>) => {
      state.data = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { setData } = dataSlice.actions;
export const dataSelector = (state: RootState) => state.data;