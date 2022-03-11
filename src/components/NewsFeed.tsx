
import React,{ useContext, useEffect, useState } from "react";
import {Context} from '../context/dataStore'

 const NewsFeed:React.FC = () => {
     const {news_data, getNewsData} = useContext(Context)
   
     useEffect(()=> {
         const onLoad = () => {
             if(getNewsData){
             getNewsData()
             }
         }
         onLoad()
     }, [])
     useEffect(()=>{
         if(news_data){
         
        news_data
         }
     }, [news_data])
 return (
 <>Feed</>
 )
}
export default NewsFeed