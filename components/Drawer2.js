"use client"
import { sidebarItems } from '@/lib/data.js'
import { Menu } from 'lucide-react'
import Link from 'next/link.js'
import { usePathname } from 'next/navigation.js'
import React from 'react'
import logo from "@/public/assets/logo.png"
import Image from 'next/image.js'

const Drawer2 = () => {
  return (
    <div className="drawer  flex-[0_0_0%] block xl:hidden">
      <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer2" className="cursor-pointer">
          <Menu size={28} />
        </label>
      </div>
      <div className="drawer-side  z-[2]">
        <label
          htmlFor="my-drawer2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="menu w-72 min-h-full flex flex-col items-center  bg-gray-100 dark:bg-zinc-900 px-4 py-16 ">
          <Image src={logo} alt='log'/>
          <div className='mt-4'>
            <h5 className='text-lg text-center font-semibold'>Location</h5>
            <p className='text-base'>Los Angeles,California</p>
          </div>
          <ul className="w-full flex flex-col gap-y-3 mt-10">
            {/* Sidebar content here */}
            {sidebarItems.map((item, index) => (
              <li key={index} className="">
                <ActiveLink
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
          
        </aside>
      </div>
    </div>
  )
}

export const ActiveLink = ({href,icon,label}) => {
    const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-x-2 p-2 w-full rounded-lg text-sm font-medium  ${
        currentRoute === href ? "bg-gray-300 text-violet-500  " : "text-gray-500"
      }`}
    >
      {icon}
     <p className='text-xl md:text-2xl font-semibold'>{label}</p> 
    </Link>
  );
}

export default Drawer2