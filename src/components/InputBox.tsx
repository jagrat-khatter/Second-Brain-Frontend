interface InputBoxProps {
  placeHolder: string;
  type: 'text' | 'number';
  onChange?: (value: string) => void;  // Better to pass the actual value
  fullWidth?: boolean;
  ref?: any
}


export const InputBox = ({placeHolder , type , onChange , fullWidth , ref}:InputBoxProps)=>{

  return <div><input placeholder={placeHolder}  ref={ref} onChange={(onChange ? (e)=>onChange(e.target.value) : ()=>1)} 
  className={`px-4 py-2 my-2 rounded border border-1 border-gray-200 focus:outline-none 
    ${fullWidth ? 'w-full': ''}`} spellCheck={false} /></div>
}