import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from './features/News/redux/news-api-slice'
import { favoritesApi } from './features/Favorites/redux/favorites-api-slice';
import { authApi } from './features/Login_Signup/redux/auth.api.slice';
import authReducer from './features/Login_Signup/redux/authslice'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [favoritesApi.reducerPath]:favoritesApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware, favoritesApi.middleware, authApi.middleware);
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch