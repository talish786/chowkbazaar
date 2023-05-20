import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import authService from './services/authService';
import authReducer from './reducers/authReducer';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authService.reducerPath]: authService.reducer,
    "authReducer": authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
})
setupListeners(store.dispatch);

export default store;