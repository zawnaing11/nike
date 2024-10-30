import { copyrightSign } from "../../assets/icons"
import { footerLogo } from "../../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex gap-5 mt-8 items-center">
            {
              socialMedia.map((social) => (
                <div className="flex bg-white items-center justify-center rounded-full w-12 h-12">
                  <img src={social.src} alt={social.alt} className="text-white" width={24} height={24}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 flex-wrap lg:gap-10 gap-20 justify-between">
            {
              footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-2xl font-montserrat leading-normal font-medium mb-6 text-white">{section.title}</h4>
                  <ul className="mt-6 gap-3">
                    {
                      section.links.map((link) => (
                        <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center mt-24 justify-between text-white-400">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0"/>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
