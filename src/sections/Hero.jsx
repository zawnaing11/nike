import { useState } from "react"
import { arrowRight } from "../../assets/icons"
import { bigShoe1 } from "../../assets/images"
import Button from "../components/Button"
import ImageCard from "../components/ImageCard"
import { shoes, statistics } from "../constants"

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section id="home" className="w-full min-h-screen flex xl:flex-row flex-col justify-center gap-10 mx-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x">
        <p className="text-xl text-coral-red font-montserrat">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-lg text-slate-gray mt-6 mb-14 leading-8 font-montserrat sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label={'Shop now'} iconURL={arrowRight}/>
        <div className="flex justify-start items-start w-full mt-20 gap-16 flex-wrap">
          {
            statistics.map((data, index) => (
              <div key={data}>
                <p className="font-bold text-4xl font-palanquin">{data.value}</p>
                <p className="font-montserrat leading-7 text-slate-gray">{data.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
          <img src={bigShoeImage} alt="Shoe Collection" width={610} height={500} className="relative z-10 object-contain"/>
          <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {
              shoes.map((shoe) => (
                <div key={shoe}>
                  <ImageCard
                    imgUrl={shoe}
                    changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                    bigShoeImage={bigShoeImage}
                  />
                </div>
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Hero
