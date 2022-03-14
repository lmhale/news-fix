import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { RootState, AppDispatch } from './store'

// create hooks that are pre-typed
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;