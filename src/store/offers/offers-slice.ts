import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferState } from './types';
import { CITIES } from '../../mocks/city_data';
import { OfferPreview } from '../../types/offerPreview';
import { fetchOffersAction } from './offer-thunk';
import { RequestStatus } from '../../shared/constants';
import { City } from '../../types/city';
import { OFFERS_SLICE_NAME } from '.';


const initialState:OfferState = {
  currentCity: CITIES[0],
  offers: [],
  requestStatus:RequestStatus.Idle
};

export const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    setCurrentCity:(state, action: PayloadAction<City>) =>{
      state.currentCity = action.payload;
    },
    setOffers:(state, action: PayloadAction<OfferPreview[]>) =>{
      state.offers = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.pending,(state)=>{
      state.requestStatus = RequestStatus.Loading;
    })
      .addCase(fetchOffersAction.fulfilled,(state,action: PayloadAction<OfferPreview[]>)=>{
        state.offers = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.rejected,(state)=>{
        state.requestStatus = RequestStatus.Failed;
      });
  }
});


export const {setCurrentCity, setOffers} = offersSlice.actions;
