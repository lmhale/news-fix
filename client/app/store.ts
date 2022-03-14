import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../features/news/news-slice'

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch