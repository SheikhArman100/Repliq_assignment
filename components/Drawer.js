"use client"
import { sidebarItems } from '@/lib/data.js'
import { Menu } from 'lucide-react'
import Link from 'next/link.js'
import { usePathname } from 'next/navigation.js'
import React from 'react'

const Drawer = () => {
  return (
    <div className="drawer md:hidden flex-[0_0_0%]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <Menu size={28} />
        </label>
      </div>
      <div className="drawer-side pt-[4rem] md:pt-12 z-[2]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="menu w-60 min-h-full flex flex-col items-center justify-between bg-gray-100 dark:bg-zinc-900 px-4 py-16 ">
          
          <ul className="w-full flex flex-col gap-y-3">
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
          <div>
            <h5 className='text-lg text-center font-semibold'>Location</h5>
            <p className='text-base'>Los Angeles,California</p>
          </div>
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
        currentRoute === href ? "bg-gray-300 text-gray-500 dark:bg-white dark:text-black " : ""
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

export default Drawer