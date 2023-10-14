/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './AllHeros/allHerosSlice';

const store = configureStore({
  reducer: {
    HeroObj: heroesReducer,
  },
});

export default store;
