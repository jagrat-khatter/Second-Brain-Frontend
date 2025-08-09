import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";

export function Signin (){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    return <div className='h-screen w-screen bg-bluelight-500 flex justify-center items-center'>
        <div className='bg-white rounded border min-w-84 p-8' >
            <InputBox placeHolder='Username' type='text' onChange={setUsername} fullWidth={true} />
            <InputBox placeHolder='Password' type='text' onChange={setPassword} fullWidth={true} />
            <div className='flex justify-center pt-8'>
                <Button onClick={()=>window.open('')} variant={'primary'} text={'Sign Up'} size={'sm'} rounded={'md'} fullWidth={true} loading={false}/>
            </div>
        </div>
        
    </div>
}