import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferState } from './types';
import { CITIES } from '../../mocks/city_data';
import { OFFERS } from '../../mocks/offers_data';
import { OfferPreview } from '../../types/offerPreview';


const OFFERS_SLICE_NAME:string = 'offers';

const initialState:OfferState = {
  currentCity: CITIES[0].name,
  offers: OFFERS,
};

export const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    setCurrentCity:(state, action: PayloadAction<string>) =>{
      state.currentCity = action.payload;
    },
    setOffers:(state, action: PayloadAction<OfferPreview[]>) =>{
      state.offers = action.payload;
    }
  },
});


export const {setCurrentCity, setOffers} = offersSlice.actions;
