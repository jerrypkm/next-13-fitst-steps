import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react' 
import { ActiveLink } from '..'

const navItems = [
  { path: '/pricing', label:'Pricing' },
  { path: '/contact', label:'Contact' },
  { path: '/about', label:'About' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link className='flex items-center gap-2' href='/'>
            <HomeIcon></HomeIcon>
            <span>Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {navItems.map(navItem => 
          <ActiveLink
            key={navItem.path} 
            {...navItem}
          />)
        }
    </nav>
  )
}
