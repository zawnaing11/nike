const Button = ({ label, iconURL }) => {
  return (
    <button className="flex py-4 px-7 bg-coral-red rounded-full text-white gap-2 justify-center items-center font-montserrat border border-coral-red text-lg leading-none">
        {label}
        {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 w-5 h-5 rounded-full"/>}
    </button>
  )
}

export default Button
