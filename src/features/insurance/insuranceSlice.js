import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchApiOneInsuranceOffers = createAsyncThunk("apiOneInsuranceOffers/fetch", async (arg) => {
  const response = await axios.get(arg);
    return response.data.offerList;
  });

  export const fetchApiTwoInsuranceOffers = createAsyncThunk("apiTwoInsuranceOffers/fetch", async (arg) => {
    const response = await axios.get(arg);
    return response.data.offerList;
  });

  export const fetchIndividualOffersCount = createAsyncThunk("individualOffersCount/fetch", async (arg) => {
    const response = await axios.get(arg);
    return response.data.num_offers
  });

  export const fetchIndividualOffer= createAsyncThunk("individualOffer/fetch", async (arg) => {
    const response = await axios.get(arg);
    return response.data
  });

const initialState = {
  individualOffers: [],
  individualOfferStatus: "idle",
  individualOffersCount: 0,
  individualOffersCountStatus: "idle",
  individualOffersCountError: null, 
  apiOneInsuranceOffers: [],
  apiTwoInsuranceOffers: [],
  apiOneStatus: "idle",
  apiTwoStatus: "idle",
  apiOneError: null,
  apiTwoError: null,

};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  extraReducers: {
    [fetchApiOneInsuranceOffers.pending]: (state) => {
      state.apiOneStatus = "loading";
    },
    [fetchApiOneInsuranceOffers.fulfilled]: (state, action) => {
      state.apiOneStatus = "succeeded";
      state.apiOneInsuranceOffers = action.payload;
    },
    [fetchApiOneInsuranceOffers.error]: (state, action) => {
      state.apiOneStatus = "failed";
      state.apiOneError = action.payload;
    },
    [fetchApiTwoInsuranceOffers.pending]: (state) => {
        state.apiTwoStatus = "loading";
    },
    [fetchApiTwoInsuranceOffers.fulfilled]: (state, action) => {
        state.apiTwoStatus = "succeeded";
        state.apiTwoInsuranceOffers = action.payload;
    },
    [fetchApiTwoInsuranceOffers.error]: (state, action) => {
        state.apiTwoStatus = "failed";
        state.apiTwoError = action.payload;
    },
    [fetchIndividualOffersCount.pending]: (state) => {
        state.individualOffersCountStatus = "loading";
    },
    [fetchIndividualOffersCount.fulfilled]: (state, action) => {
        state.individualOffersCountStatus = "succeeded";
        state.individualOffersCount = action.payload;
    },
    [fetchIndividualOffersCount.error]: (state, action) => {
        state.individualOffersCountStatus = "failed";
        state.individualOffersCountError = action.payload;
    },
    [fetchIndividualOffer.pending]: (state, action) => {
      state.individualOfferStatus = "loading";
    },
    [fetchIndividualOffer.fulfilled]: (state, action) => {
      state.individualOffers.push(action.payload);
    },
  },
});

export default insuranceSlice.reducer;
export const apiOneStatus = state => state.insurance.apiOneStatus;
export const apiTwoStatus = state => state.insurance.apiTwoStatus;
export const apiOneInsuranceOffers = state => state.insurance.apiOneInsuranceOffers;
export const apiTwoInsuranceOffers = state => state.insurance.apiTwoInsuranceOffers;
export const individualOffersCount = state => state.insurance.individualOffersCount;
export const individualOffersCountStatus = state => state.insurance.individualOffersCountStatus;
