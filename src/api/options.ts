import { OptionsProps } from "../components/interface" 
export const options:OptionsProps = {
    method:'GET',
    url:'https://newsapi.org/v2/top-headlines',
    params:{
        country:'us',
    },
    headers:{
       'X-Api-Key': '22bbf90d967d4a6bb08645375335e232'
    }
}