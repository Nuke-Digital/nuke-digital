import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

export const links = [
    {
        title: "Start",
        href: "#"
    },
    {
        title: "Über Uns",
        href: "#about"
    },
    {
        title: "Webseiten",
        href: "#referenzen"
    },
    {
        title: "Entwickler",
        href: "#devs"
    }
]

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useState(true)

  const { scrollY } = useScroll()

  const [openMobile, setOpenMobile] = useState(false)

  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== "undefined" && window.innerWidth < 600
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


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
    <>
    <div id='navbar' className='flex font-semibold justify-center flex-row fixed w-full top-0 z-60 md:text-lg text-md px-4' >
      <div className='lg:mx-16 mx-4 py-6 flex w-full md:px-12'>
        <div className='flex flex-1 flex-row gap-2 items-center'>
          {/*<img src={Logo} className='size-9'/>
          <h2 className='text-xl lg:block hidden text-white'>NuriKemal Digital</h2>
          <h2 className='text-xl block lg:hidden text-white'>NuKe Digital</h2>*/}
          <Logo isExpanded={isExpanded}/>
        </div>
        <div className='z-20 flex-2 justify-center flex items-center'>
          <ul className=''>
          {!isMobile && links.map((item) => 
              <a id='links' href={item.href} className='p-2'>
                  {item.title}
              </a>
          )}
          </ul>
        </div>
        <div className='flex-1 flex justify-end items-center'>
          <div className='px-4 py-2 bg-background-cta rounded-xl md:block hidden'>
            <a id='links' href='mailto:kontakt@nuke-digital.com' className=''>
              Kontaktieren
            </a>
          </div>
          <div className='rounded-xl md:hidden block p-2'>
            <button id='links' onClick={() => setOpenMobile(!openMobile)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill='#fcfcfc' d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <motion.div 
    className='flex px-4 fixed flex-1 w-full font-semibold z-60 backdrop-blur-lg h-full flex-col'
    initial={{height: 0, opacity: 0}} animate={{height: openMobile ? '100%':0, opacity: openMobile ? 1:0}} exit={{height: 0}}>
      {openMobile && (
      <>
      <div className='flex-row mx-4 py-6 flex items-center justify-between'>
        <Logo isExpanded={isExpanded}/>
        <motion.div initial={{rotate: 0}} animate={{rotate: openMobile ? 45:0}} className='rounded-xl block p-2'>
          <button id='links' onClick={() => setOpenMobile(!openMobile)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill='#fcfcfc' d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </button>
        </motion.div>
      </div>
      <ul className='flex flex-col mx-4'>
      {links.map((item) => 
          <a id='links' href={"/"+item.href} onClick={() => setOpenMobile(false)} className='p-2'>
              {item.title}
          </a>
      )}
          <NavLink onClick={() => setOpenMobile(false)}  id='links' to={"/impressum"} className='p-2'>
              Impressum
          </NavLink>
      <ul className='flex flex-col pt-6'>
          <NavLink  id='links' to={""} className='p-2'>
              Instagram
          </NavLink>
          <NavLink id='links' to={""} className='p-2'>
              LinkedIn
          </NavLink>
          <NavLink id='links' to={""} className='p-2'>
              GitHub
          </NavLink>
          <a id='links' href={`mailto:info@nuke-digital.com`} className='p-2'>
              E-Mail
          </a>
      </ul>
      </ul>
      </>
      )}
    </motion.div>
    </>
  )
}
