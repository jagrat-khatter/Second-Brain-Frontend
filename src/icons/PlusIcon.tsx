import {type IconProps} from '.'
import {iconSizeVariants} from '.'

export const PlusIcon = (props : IconProps)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className={`${iconSizeVariants[props.size || 'sm']}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

// // If props.size = "sm", then:
// iconSizeVariants[props.size]  // becomes iconSizeVariants["sm"] → "size-2"

// // This is equivalent to:
// iconSizeVariants["sm"]  // → "size-2"
// iconSizeVariants.sm     // → "size-2"