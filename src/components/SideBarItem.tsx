import type { ReactElement, ReactNode } from "react"

interface SidebarItemProp {
    text : string ,
    icon : ReactElement
}

export function SidebarItem({text , icon} : SidebarItemProp){
    
    return <div>
    <button onClick={()=>window.open('kjvn')} className='flex flex items-center w-full text-xl my-2 text-grayicon-500 
    py-2 pl-4 border-4 border-grayBorder2 rounded-xl hover:cursor-pointer hover:text-bluedark-500 
    hover:bg-bluelight-500 transition delay-100 duration-200 '>
        <div>{icon}</div>
        <div className='pl-4'>{text}</div>
    </button>
    </div>
}