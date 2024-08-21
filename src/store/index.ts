import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './offers/offers-slice';


const rootReducer = combineReducers({
  [offersSlice.name]:offersSlice.reducer
});

export const store = configureStore({
  reducer:{
    OFFERS_SLICE_NAME: rootReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
