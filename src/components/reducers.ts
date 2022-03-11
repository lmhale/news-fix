import {State, ActionProps} from './interface'
import { ActionTypes } from "./types";

export const newsDataReducer = (state:State, action:ActionProps):State => {
    const {type, payload}= action;
    switch(type){
        case ActionTypes.GET_NEWS_DATA:
            return {...state, news_data:payload}
            default:
                return state;
    }
}