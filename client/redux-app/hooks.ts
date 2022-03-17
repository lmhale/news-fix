import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { useMemo } from 'react';
import { RootState, AppDispatch } from './store'
import { selectCurrentUser } from '../redux-app/features/users/authslice'

// create hooks that are pre-typed
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAuth = () => {
    const user = useSelector(selectCurrentUser)
  
    return useMemo(() => ({ user }), [user])
  }
  