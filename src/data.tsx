import axios from 'axios'
import {atom , atomFamily, selector, selectorFamily} from 'recoil'
import { Card } from './components/Card';
import { BACKEND_URL } from './config';

export const content = selector({
    key : 'full-content' ,
    get : async ()=>{
        const token: string = 'Bearer ' + localStorage.getItem('brainly_token');
        
        const response = await axios.get(BACKEND_URL + 'getContent', {
            headers: {
                Authorization: token,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
            params: {
                _t: Date.now() // Cache buster
            }
        });
        console.log(response.data)
        return response.data;
    }
  })

  

export  const specificContent = selectorFamily({
    key : 'specific-content' ,
    get : (contains: string) => ({get})=>{
      const func = (a: any): boolean =>{
        if(a.link.includes(contains)) return true;
        else return false;
      }
        const data = get(content);
        let newData = data.filter(func)

        return newData;
    }
  })