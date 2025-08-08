interface InputBoxProps {
  placeHolder: string;
  type: 'text' | 'number';
  onChange?: (value: string) => void;  // Better to pass the actual value
}


export const InputBox = ({placeHolder , type , onChange}:InputBoxProps)=>{

  return <div><input placeholder={placeHolder}  onChange={(onChange ? (e)=>onChange(e.target.value) : ()=>1)} className='px-4 py-2 m-2 rounded border border-1 border-gray-200 focus:outline-none' /></div>
}