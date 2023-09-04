import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from './phonebook/phonebookApi';
import { privateContactsApi } from './privateContacts/privateContactsApi';
import authSlice from './user/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const middleware = customizedMiddleware.concat(
  phoneBookApi.middleware,
  privateContactsApi.middleware
);

const authPersistConfig = {
  key: 'key',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice),
    [privateContactsApi.reducerPath]: privateContactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
