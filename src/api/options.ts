import { OptionsProps } from "../components/interface" 
export const options:OptionsProps = {
    method:'GET',
    url:'https://newsapi.org/v2/top-headlines?country',
    params:{
        country:'us',
        apiKey:process.env.API_KEY
    },
    headers:{
        Host:'newsapi.org'
    }
}