import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Footer() {
  const {currentUser} = useSelector(state=>state.user);
  return (
    <div >
        <p className="font-sans">
          Copyright <span>&#169;</span> 2024 - <Link to="/sign-in" className='text-blue-400'>_mr_glacier___</Link> - All
          Rights Reserved
        </p>
    </div>
  )
}
