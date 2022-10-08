/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const RETRIEVE_ASYNC_COUNTRIES = 'RETRIEVE_ASYNC_COUNTRIES';
const url = 'https://restcountries.com/v3.1/all';

export const showCountries = createAsyncThunk(
  RETRIEVE_ASYNC_COUNTRIES,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const countries = data.map((item) => ({
      name: item.name.common,
      currency: item.currencies,
      capital: item.capital,
      continent: item.continents,
      subRegion: item.subregion,
      language: item.languages,
      population: item.population,
      landMass: item.area,
      timeZone: item.timezones,
      flag: item.flags.svg,
      coatOfArms: item.coatOfArms.svg,
      alternateName: item.altSpellings,
    }));
    return countries;
  },
);

const countryReducer = createSlice({
  name: 'country',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [showCountries.pending]: (state) => {
      state.loading = true;
    },
    [showCountries.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [showCountries.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const { setCountryReducer } = countryReducer.actions;
export default countryReducer;
