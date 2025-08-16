interface InputBoxProps {
  placeHolder: string;
  type: 'text' | 'number' | 'password';
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null> ; // Renamed to avoid confusion
}

export const InputBox = ({ placeHolder, type, onChange, fullWidth, inputRef }: InputBoxProps) => {
  return (
    <div>
      <input 
        placeholder={placeHolder}  
        type={type}
        ref={inputRef} // Use inputRef instead
        onChange={onChange ? (e) => onChange(e.target.value) : () => {}}
        className={`px-4 py-2 my-2 rounded border border-1 border-gray-200 focus:outline-none 
          ${fullWidth ? 'w-full' : ''}`} 
        spellCheck={false} 
      />
    </div>
  );
}