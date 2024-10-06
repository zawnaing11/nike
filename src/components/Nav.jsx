import { headerLogo } from '../../assets/images'
import { hamburger } from '../../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 w-full z-10">
        <nav className='flex justify-between max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.key}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
