import React from 'react'
import { BiCustomize } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className='bg-gray-800 text-white p-5 min-h-screen'>
        <div className='flex flex-row gap-3'>
            <BiCustomize className='text-2xl' />
            <h1>Customize Portfolio</h1>
        </div>
        <div>
            <ul className='mt-5'>
                <li className='py-2'>Basic Info</li>
                <li className='py-2'>Social Media</li>
                <li className='py-2'>Projects</li>
                <li className='py-2'>Education</li>
                <li className='py-2'>Certificate</li>
                <li className='py-2'>Work Experience</li>
                <li className='py-2'>Contact</li>
                <li className='py-2'></li>
                <li className='py-2 flex flex-row items-center gap-2 text-green-600'><IoSettingsOutline /> Settings</li>
                <li className='py-2 flex flex-row items-center gap-2 text-red-600'><VscSignOut /> Sign Out</li>
            </ul>
        </div>
    </div>
  )
}
