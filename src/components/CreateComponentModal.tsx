import { useRef, useState } from 'react'
import { CrossIcon } from '../icons/CrossIcon'
import { InputBox } from './InputBox'


export function CreateContentModal({open , onClose}:any){
    const backgroundRef = useRef<HTMLDivElement>(null);
    const handleInputChange = (value: string)=>{
        if(backgroundRef.current){
            if(value && value.trim().length > 0) {
                    backgroundRef.current.style.backgroundColor = 'rgb(34 197 94)'; // green-500
            }
            else {
                backgroundRef.current.style.backgroundColor = 'rgb(248 113 113)';
            }
        }
    }

    return (<div>
        {open && <div ref={backgroundRef} className='w-screen h-screen bg-red-300 fixed top-0 left-0 z-1 opacity-70 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <span className='bg-white opacity-100  p-4 rounded-lg flex flex-col'>
                    <div className='flex justify-end mb-2'>
                     
                     <button onClick={()=>onClose()} className='rounded p-1 hover:cursor-pointer hover:bg-red-200'>
                            <CrossIcon size={"md"} strokeWidth={3.5}/>
                     </button>
                    </div>
                    <div className=''>
                        <InputBox type={'text'} placeHolder={'Title'} onChange={handleInputChange} />
                        <InputBox type={'text'} placeHolder={'link'} onChange={handleInputChange} />
                     </div>
                </span>
            </div>
        </div>}
    </div>)

}

