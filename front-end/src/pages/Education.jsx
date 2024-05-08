import React from 'react'
import Sidebar from '../components/Sidebar';

export default function Education() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="">
        <Sidebar />
      </div>
      <div>
        <h1>Education</h1>
      </div>
    </div>
  )
}
