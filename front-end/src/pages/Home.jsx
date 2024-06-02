import React from 'react'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className='bg-slate-100'>
      <Header/>
      <Welcome />
      
    <Footer/>
    </div>
  )
}
