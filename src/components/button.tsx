import {type ReactNode} from 'react'
// The type keyword in the import tells TypeScript this is only used for type annotations and won't be 
// needed at runtime.

export interface ButtonProps {
    variant : "primary" | "secondary" ;
    size : "sm" | "md" | "lg" ;
    text : string ;
    startIcon : ReactNode ;
    onClick: ()=>void ;
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

export const Button = (props : ButtonProps)=>{
    const {variant, size, text, startIcon, onClick} = props;
    let color = (variant === "primary" ? "blue" : "red")

    return (
        <button onClick={onClick} className={`bg-${color}-500`}>
            {startIcon}
            {text}
        </button>
    )
    
}