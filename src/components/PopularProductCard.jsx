import { star } from "../../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] bg-card bg-cover bg-center bg-"/>
        <div className="flex mt-8 justify-start gap-2.5">
            <img src={star} alt="star" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="text-2xl mt-2 leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="text-2xl mt-2 leading-normal font-montserrat font-semibold text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard
