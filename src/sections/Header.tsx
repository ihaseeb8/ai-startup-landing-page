"use client";

import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import {Button} from '@/components/Button'
import { useState } from 'react';

export const Header = () => {
  
  const [ mobileNav, setMobileNav ] = useState(false)

  const toggleNav = () =>{
    setMobileNav(!mobileNav)
  }


  return  (

    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden '></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:backdrop-blur md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className='border size-10 inline-flex items-center justify-center rounded-md border-white/15'>
            <LogoIcon className='size-8'/>
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href='#Features' className='text-white/70 hover:text-white transition'>Features</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Developers</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Changelog</a>
            </nav>
          </div>

          {mobileNav && 
            <div className='md:hidden inset-0'>
              <nav className='flex flex-col gap-8 text-4xl items-center justify-center b fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black h-[100vh] w-full'>
                <div onClick={toggleNav}></div>
                <a href='#' className='text-white/70 hover:text-white transition' onClick={toggleNav}>Features</a>
                <a href='#' className='text-white/70 hover:text-white transition' onClick={toggleNav}>Developers</a>
                <a href='#' className='text-white/70 hover:text-white transition' onClick={toggleNav}>Pricing</a>
                <a href='#' className='text-white/70 hover:text-white transition' onClick={toggleNav}>Changelog</a>
              </nav>
            </div>
          }
          
          <div className='flex gap-4 items-center'>
            <Button>Join Waitlist</Button>
            <div onClick={toggleNav}>
              <MenuIcon className='md:hidden relative z-30 transition duration-900'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
