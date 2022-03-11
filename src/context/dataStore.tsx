import React, {createContext, useReducer} from "react";
import { State, ContextProps } from "../components/interface";
import {newsDataReducer} from '../components/reducers'
export const Context = createContext<Partial<ContextProps>>({})

//provider
export const StoreProvider:React.FC = props => {
    const INITIAL_STATE:State = {
        news_data:[]
    }
    const [state, dispatch] = useReducer(newsDataReducer, INITIAL_STATE)
    const getNewsData = async():Promise<void> => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    const {news_data} = state;
    return (
        <Context.Provider value = {{news_data}}>
            {props.children}
            </Context.Provider>
    )
}
export default StoreProvider