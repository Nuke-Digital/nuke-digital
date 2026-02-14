import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

export const links = [
    {
        title: "Start",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Websites",
        href: "/websites"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious()

    if (typeof current !== "number" || typeof previous !== "number") return

    // Wenn man fast ganz oben ist → Navbar ausblenden (wie Nahbar: < 0.05)
    if (current < 50) {
      setIsExpanded(true)
      //setHasShadow(false);
      return
    }
    else {
      setIsExpanded(false);
      return
    }
  })

  return (
    <div id='navbar' className='flex font-semibold justify-center flex-row fixed w-full top-0 z-50' >
      <div className='lg:mx-16 mx-4 py-6 flex w-full px-12'>
        <div className='flex flex-1 flex-row gap-2 items-center'>
          {/*<img src={Logo} className='size-9'/>
          <h2 className='text-xl lg:block hidden text-white'>NuriKemal Digital</h2>
          <h2 className='text-xl block lg:hidden text-white'>NuKe Digital</h2>*/}
          <Logo isExpanded={isExpanded}/>
        </div>
        <div className='z-20 flex-2 justify-center flex items-center'>
          <ul className=''>
          {links.map((item) => 
              <NavLink to={item.href} className='p-2'>
                  {item.title}
              </NavLink>
          )}
          </ul>
        </div>
        <div className='flex-1 flex justify-end items-center'>
          <div className='px-4 py-2 bg-background-cta hover:bg-background-hover rounded-xl'>
            <a className=''>
              Kontaktieren
            </a>
          </div>
        </div>
      </div>
      </div>
  )
}
