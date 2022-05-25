import { configureStore } from "@reduxjs/toolkit";
import insuranceReducer from "../features/insurance/insuranceSlice";

export default configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});
