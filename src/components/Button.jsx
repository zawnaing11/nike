const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  console.log(backgroundColor);
  return (
    <button className={`flex py-4 px-7 rounded-full gap-2 justify-center items-center font-montserrat border text-lg leading-none ${ backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 w-5 h-5 rounded-full"/>}
    </button>
  )
}

export default Button
