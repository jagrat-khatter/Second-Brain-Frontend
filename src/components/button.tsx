import {type ReactNode} from 'react'
// The type keyword in the import tells TypeScript this is only used for type annotations and won't be 
// needed at runtime.

export interface ButtonProps {
    variant : "primary" | "secondary" ;
    size : "sm" | "md" | "lg" ;
    text : string ;
    startIcon?: ReactNode ;
    onClick: ()=>void ;
    rounded: string ;
    fullWidth?: boolean ;
    loading?: boolean ;
}

type variantStylesType = {
    "primary" : string ,
    "secondary" : string
}
const variantStyles:variantStylesType = {
    "primary" : "bg-bluedark-500  text-white" ,
    "secondary" : "bg-bluelight-500 text-blueextra-500"
}
// // Method 1: Destructuring in function parameters
// export const Button = ({variant, size, text, startIcon, onClick}: ButtonProps) => {
//     return (
//         <button onClick={onClick}>
//             {startIcon}
//             {text}
//         </button>
//     )
// }
const roundedStyles: {[key: string]: string} = {
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "full": "rounded-full"
};
const defaultStyles:string = "px-3 py-2 min-w-fit cursor-pointer font-normal" ;

export const Button = (props : ButtonProps)=>{
    const {variant, size, text, startIcon, onClick , rounded , fullWidth , loading} = props;
    
    return (
        <button onClick={onClick} className={`${variantStyles[variant]} ${defaultStyles} ${roundedStyles[rounded]} outline-none 
        ${fullWidth ? 'w-full' : ''  } disabled:cursor-not-allowed disabled:opacity-40`} disabled={loading} >
            <div className='flex items-center grid justify-items-center-safe'>
                {startIcon  ? <div className="pr-2">{startIcon}</div> : null}  
                {text} 
            </div>
        </button> 
    )
}


