import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartProductsReducer } from './cartProductsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartProducts'],
};

const persistedCartReducer = persistReducer(persistConfig, cartProductsReducer);

export const store = configureStore({
  reducer: {
    cartProducts: persistedCartReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
