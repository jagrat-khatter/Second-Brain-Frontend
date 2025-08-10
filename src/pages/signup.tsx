import { useRef, useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {useNavigate} from 'react-router-dom'
import { Heading } from "../components/Heading";


export function Signup (){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [messageColor , setMessageColor] = useState('');
    const [message , setMessage] = useState('');
    const navigate = useNavigate();

    const signup = async ()=>{
        try
        {
            const username = usernameRef.current?.value ;
            const password = passwordRef.current?.value ;

            const response = await axios.post(BACKEND_URL+'signup' ,{ username : username , password : password});
            if(response.data.message ===  "User successfully created!"){
                setMessageColor('text-green-600');
                setMessage('User signed up');
                setTimeout(()=>navigate('/signin') ,2000)  
            }
        }
        catch(err:any){
            if(err.response && err.response.data.message){
                setMessageColor('text-red-600');
                setMessage(err.response.data.message);
            }
            else console.log('There is error') ;
        }
    }


    return <div className='h-screen w-screen bg-bluelight-500 flex justify-center items-center'>
        <div className='bg-white rounded border-2  border-blueextra-500 min-w-84 p-8' >
            <Heading label={'Signup'} />
            <InputBox placeHolder='Username' type='text' ref={usernameRef} fullWidth={true} />
            <InputBox placeHolder='Password' type='text' ref={passwordRef} fullWidth={true} />
            <div className='flex justify-center pt-8'>
                <Button onClick={()=>signup()} variant={'primary'} text={'Sign Up'} size={'sm'} rounded={'md'} fullWidth={true} loading={false} />
            </div>
            <div className={`flex justify-center font-mono text-xl ${messageColor}`}>{message}</div>
        </div>
        
    </div>
}