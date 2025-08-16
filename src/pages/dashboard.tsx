import { useState  , useRef, useEffect, Suspense} from 'react'

import {Button} from '../components/button.tsx'
import {PlusIcon} from '../icons/PlusIcon.tsx'
import {ShareIcon} from '../icons/shareIcon.tsx'
import '../App.css'
import { Card } from '../components/Card.tsx'

import { CreateContentModal } from '../components/CreateComponentModal.tsx'
import { SideBar } from '../components/Sidebar.tsx'
import axios from 'axios'
import { BACKEND_URL } from '../config.ts'
import { Outlet } from 'react-router-dom'


export function Dashboard() {
  const [count, setCount] = useState(0);
  const [open , setOpen] = useState(false);
  const [data , setData] = useState(null);
  const [cards , setCards] = useState(<div></div>)
  // useEffect(()=>{
  //   try
  //   {
  //     const main = async ()=>{
        
  //       const token:string = 'Bearer ' +  localStorage.getItem('brainly_token');
  //       console.log(token);
  //       const response = await axios.get(BACKEND_URL + 'getContent' ,{headers:{
  //         Authorization : token
  //       }});
  //       const array = response.data.map((x:any)=>{
  //           return(<Card url={x.link}  title={x.title}/>)
  //       })
  //       setCards(array);
  //       console.log(response.data);
  //     }
  //     main()
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // } , [])

  return (
    <>
    <SideBar />
      <div className='ml-72 pl-4 bg-graymain-500'>
        <CreateContentModal open={open} onClose={()=>setOpen(x=>!x)} />
      <div className='py-4 flex justify-around'>
          <Button onClick={()=>window.open("https://codeforces.com/ratings/organization/3281")} 
          text={"Share Brain"} variant={"secondary"} size={"sm"} startIcon={<ShareIcon size={'md'} 
          strokeWidth={3.5}/>} rounded={"xl"} />
          
          <Button onClick={()=>setOpen(x => !x)} text={'Add Content'} variant={"primary"} size={"sm"} 
          startIcon={<PlusIcon size={"md"} strokeWidth={3.5}/>} rounded={'xl'}/>
      </div>
      <Suspense fallback={<div>loading</div>} >
        <Outlet />
      </Suspense>
      </div>
    </>
  ) 
}


