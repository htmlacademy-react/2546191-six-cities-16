import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../shared/constants';
import { USER_SLICE_NAME } from '.';
import { UserState } from './types';
import { checkAuth, login } from './user-thunk';
import { User } from '../../types/user';


const initialState:UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
  requestStatus:RequestStatus.Idle
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    setStatus:(state, action: PayloadAction<AuthorizationStatus>) =>{
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled,(state,action: PayloadAction<User>)=>{
        state.info = action.payload;
        state.status = AuthorizationStatus.Auth ;
        state.requestStatus = RequestStatus.Success;
      }).addCase(login.fulfilled,(state:UserState,action: PayloadAction<User>)=>{
        state.info = action.payload;
        state.status = AuthorizationStatus.Auth ;
        state.requestStatus = RequestStatus.Success;
      });
  }
});


export const {setStatus} = userSlice.actions;
