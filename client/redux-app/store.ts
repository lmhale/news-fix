import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from './features/news/news-api-slice'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware);
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch