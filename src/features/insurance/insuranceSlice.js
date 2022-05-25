import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  insuranceData: [],

};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {

  },
});

export default insuranceSlice.reducer;