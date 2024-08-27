import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../shared/constants';
import { UserState } from './types';
import { checkAuth, login, logout } from './user-thunk';
import { User } from '../../types/user';


const initialState:UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
  requestStatus:RequestStatus.Idle
};

export const userSlice = createSlice({
  name: 'user',
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
      }).addCase(logout.fulfilled, (state: UserState) => {
        state.info = null;
        state.status = AuthorizationStatus.NoAuth;
      });
  }
});


export const {setStatus} = userSlice.actions;
