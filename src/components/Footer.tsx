import React from 'react'
import { links } from './Navbar'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-row lg:mx-16 mx-4 py-6 md:px-12 h-[50vh] border-l border-r border-dashed border-border'>
        <div className="flex flex-1 w-full flex-col md:px-12 gap-4 justify-center px-4">
          <h1 className="md:text-6xl text-4xl font-semibold ">NuKe Digital</h1>
          <h3 className="text-secondary md:text-md text-xs">WEBENTWICKLUNG | HOSTING | DESIGN</h3>
        </div>
        <div className="flex flex-1 w-full flex-row px-4 md:px-12 gap-4 justify-end items-center text-left">
          <ul className='grid grid-flow-col grid-rows-3 gap-x-8'>
            {links.map((item) => 
              <NavLink to={item.href} className='p-2'>
                {item.title}
              </NavLink>
            )}
            <a href='/impressum' className='p-2'>
              Impressum
            </a>
            <a className='p-2'>
              Datenschutz
            </a>
          </ul>
        </div>
    </footer>
  )
}
