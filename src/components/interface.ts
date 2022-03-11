import { ActionTypes } from "./types";
import {Method} from 'axios'

export interface Articles {
    
      source: {
        id: string | null;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      publishedAt: Date;
      content: string;
  
}
export interface News {
  status: string;
  totalResults: number,
  articles:Articles

}

export interface State {
  news_data: News[]
}

export interface ContextProps {
    news_data:News[],
    getNewsData(): Promise<void>
}
export interface ActionProps {
    type:ActionTypes.GET_NEWS_DATA,
    payload: News[]
}
export interface OptionsProps {
  method:Method,
  url:string,
  params:{
    country:string
  },
  headers:{
    'X-Api-Key':string
  }
}