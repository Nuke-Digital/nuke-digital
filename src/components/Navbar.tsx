import React from 'react'
import Logo from '/g101.png'
import { motion } from 'framer-motion'

const links = [
    {
        title: "Start",
        href: "#"
    },
    {
        title: "About",
        href: "#"
    },
    {
        title: "Websites",
        href: "#"
    },
    {
        title: "Contact",
        href: "#"
    }
]

export default function Navbar() {
  return (
    <div id='navbar' className='flex justify-center flex-row px-12 py-6 sticky top-0'>
      <div className='flex flex-1 flex-row gap-4 items-center px-2'>
        <img src={Logo} className='size-10'/>
        <h2 className='text-xl text-white'>NuriKemal Digital</h2>
      </div>
      <div className='flex-2 justify-center flex items-center'>
        <ul className=''>
        {links.map((item) => 
            <a className='p-2'>
                {item.title}
            </a>
        )}
        </ul>
      </div>
      <div className='flex-1'>

      </div>
    </div>
  )
}
