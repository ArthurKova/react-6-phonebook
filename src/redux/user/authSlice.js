import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrentRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state, _) {
      state.isCurrentRefresh = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCurrentRefresh = false;
    },
    [operations.fetchCurrentUser.pending](state, _) {
      state.isCurrentRefresh = false;
    },
  },
});

export default authSlice.reducer;
