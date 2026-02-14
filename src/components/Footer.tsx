import React from 'react'
import { links } from './Navbar'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-row lg:mx-16 mx-4 py-6 px-12 h-[50vh] border-l border-r border-dashed border-border'>
        <div className="flex w-full flex-col px-12 gap-4 justify-center">
          <h1 className="text-6xl font-semibold ">NuKe Digital</h1>
          <h3 className="text-secondary">WEBENTWICKLUNG | HOSTING | DESIGN</h3>
        </div>
        <div className="flex w-full flex-row px-12 gap-4 justify-end items-center text-left">
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
