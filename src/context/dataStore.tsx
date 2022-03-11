import React, {createContext, useReducer} from "react";
import axios from "axios";
import { State, ContextProps, News } from "../components/interface";

import {newsDataReducer} from '../components/reducers'
import { options } from "../api/options";
import { ActionTypes } from "../components/types";
export const Context = createContext<Partial<ContextProps>>({})

//provider
export const StoreProvider:React.FC = props => {
    const INITIAL_STATE:State = {
        news_data:[],
        
    }
    const [state, dispatch] = useReducer(newsDataReducer, INITIAL_STATE)
    const getNewsData = async():Promise<void> => {
        try {
            const res = await axios.request<News[]>(options)
            dispatch({type:ActionTypes.GET_NEWS_DATA, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
    const {news_data} = state;
    return (
        <Context.Provider value = {{news_data, getNewsData}}>
            {props.children}
            </Context.Provider>
    )
}
export default StoreProvider