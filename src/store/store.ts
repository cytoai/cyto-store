import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import localforage from 'localforage';
import {
  configureStore,
  EnhancedStore,
  Middleware,
  StoreEnhancer
} from 'redux-starter-kit';
import { reducer } from '..';

const enhancers: Array<StoreEnhancer> = [];

const middleware: Array<Middleware> = [logger, thunk];

const preloadedState = {};

const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: 'piximi'
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const options = {
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer
};

export const store: EnhancedStore = configureStore(options);

export const persistor = persistStore(store);