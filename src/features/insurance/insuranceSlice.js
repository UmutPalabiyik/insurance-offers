import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchInsuranceDataCaseOne = createAsyncThunk("insuranceCaseOne/fetch", async (arg) => {
    const response = await axios.get(arg);
    return response.data.offerList;
  });

  export const fetchInsuranceDataCaseTwo = createAsyncThunk("insuranceCaseTwo/fetch", async (arg) => {
    const response = await axios.get(arg);
    return response.data.offerList;
  });


const initialState = {
  caseOneInsuranceData: [],
  caseTwoInsuranceData: [],
  caseOneInsuranceStatus: "idle",
  caseTwoInsuranceStatus: "idle",
  caseOneInsuranceError: null,
  caseTwoInsuranceError: null,

};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  extraReducers: {
    [fetchInsuranceDataCaseOne.pending]: (state) => {
      state.caseOneInsuranceStatus = "loading";
    },
    [fetchInsuranceDataCaseOne.fulfilled]: (state, action) => {
      state.caseOneInsuranceStatus = "succeeded";
      state.caseOneInsuranceData = action.payload;
    },
    [fetchInsuranceDataCaseOne.error]: (state, action) => {
      state.caseOneInsuranceStatus = "failed";
      state.caseOneInsuranceError = action.payload;
    },
    [fetchInsuranceDataCaseTwo.pending]: (state) => {
        state.caseTwoInsuranceStatus = "loading";
      },
    [fetchInsuranceDataCaseTwo.fulfilled]: (state, action) => {
        state.caseTwoInsuranceStatus = "succeeded";
        state.caseTwoInsuranceData = action.payload;
      },
    [fetchInsuranceDataCaseTwo.error]: (state, action) => {
        state.caseTwoInsuranceStatus = "failed";
        state.caseTwoInsuranceError = action.payload;
      },
  },
});

export default insuranceSlice.reducer;

// export status
export const caseOneInsuranceStatus = state => state.insurance.caseOneInsuranceStatus;
export const caseTwoInsuranceStatus = state => state.insurance.caseTwoInsuranceStatus;
export const caseOneInsuranceData = state => state.insurance.caseOneInsuranceData;