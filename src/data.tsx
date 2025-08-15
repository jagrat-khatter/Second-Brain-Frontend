import axios from 'axios'
import {atom , atomFamily} from 'recoil'
import { Card } from './components/Card';
import { BACKEND_URL } from './config';

export const content = {
    key : 'full-content' ,
    default: async ()=>{
        const token:string = 'Bearer ' +  localStorage.getItem('brainly_token');
        console.log(token);
        const response = await axios.get(BACKEND_URL + 'getContent' ,{headers:{
          Authorization : token
        }});
        
        console.log(response.data);
        return response.data
    }
}