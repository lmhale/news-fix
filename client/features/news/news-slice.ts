import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface NewsState {
    title:string;
    url:string;
}

const initialState: NewsState = {
    title:"",
    url: ""
}

//redux-toolkit uses immer under the hood which does not mutate state
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews(state){
            state.title = ''
        }
    }
})


export const {getNews} = newsSlice.actions;

export default newsSlice.reducer;