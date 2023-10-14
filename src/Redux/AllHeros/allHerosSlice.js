/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allListHeros: [],
  isLoading: false,
  hasError: null,
};

const URL = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=03248abd63964b8cda72cfeaaf01a1eb&hash=76ffadfa117d76db60ef47d6f1409938';

export const allApiHeros = createAsyncThunk(
  'allListHeros/allApiHeros',
  async () => {
    const resp = await axios(URL);
    return resp.data.data.results;
  },
);

const allApiHerosPending = (state) => {
  state.isLoading = true;
};

const allApiHerosFulfilled = (state, action) => {
  state.allListHeros = action.payload;
  state.isLoading = false;
};

const allApiHerosRejected = (state, action) => {
  state.hasError = action.error.message;
  state.isLoading = false;
};

const heroesSlice = createSlice({
  name: 'allListHeros',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allApiHeros.pending, allApiHerosPending)
      .addCase(allApiHeros.fulfilled, allApiHerosFulfilled)
      .addCase(allApiHeros.rejected, allApiHerosRejected);
  },
});

export default heroesSlice.reducer;
