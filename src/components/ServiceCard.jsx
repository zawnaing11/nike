const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
            <img src={imgURL} alt={label} />
        </div>
        <h3 className="text-3xl font-palanquin leading-normal font-bold mt-5 ">{label}</h3>
        <p className="break-words mt-3 font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
