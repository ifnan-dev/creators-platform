type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  buttonClick?: () => void;
}

const Button=({ text, variant = 'primary', buttonClick }: ButtonProps)=>{
    return(
    <button onClick={buttonClick} className={`text-md font-semibold py-1 px-4 ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-white-300 text-blue-400 border-blue-400 border-2'}`}>
      {text}
    </button>
    )
}
export default Button;