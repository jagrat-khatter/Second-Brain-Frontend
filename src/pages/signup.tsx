import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";

export function Signup (){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    return <div className='h-screen w-screen bg-bluelight-500 flex justify-center items-center'>
        <div className='bg-white rounded border min-w-48 p-8' >
            <InputBox placeHolder='Username' type='text' onChange={setUsername} />
            <InputBox placeHolder='Password' type='text' onChange={setPassword} />
            <div className='flex justify-center py-2'>
                <Button onClick={()=>window.open('')} variant={'primary'} text={'Sign Up'} size={'sm'} rounded={'xl'} fullWidth={true}/>
            </div>
        </div>
        
    </div>
}