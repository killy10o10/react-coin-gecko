import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./home/home";

const store = configureStore({
  reducer: {
    country: countryReducer.reducer,
  },
});

export default store;
