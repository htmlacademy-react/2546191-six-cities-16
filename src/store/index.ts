import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { offersSlice } from './offers/offers-slice';
import { createAPI } from '../shared/api';
import { userSlice } from './user/user-slice';


const rootReducers = combineReducers({
  'offers': offersSlice.reducer,
  'user': userSlice.reducer,
});


const api = createAPI();

export const store = configureStore({
  reducer:rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    } })
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
