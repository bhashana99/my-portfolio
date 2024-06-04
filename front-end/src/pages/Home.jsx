import React from 'react'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import EduComponent from '../components/EduComponent'
import ExperienceComponent from '../components/ExperienceComponent'
import CertificateComponent from '../components/CertificateComponent'

export default function Home() {
  return (
    <div className='bg-slate-100'>
      <Header/>
      <Welcome />
      <EduComponent />
      <ExperienceComponent />
      <CertificateComponent />
    <Footer/>
    </div>
  )
}
