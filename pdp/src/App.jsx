import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'home/Header'
import Footer from 'home/Footer'

import './index.scss'


export const App = () => {
  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div className='my-10'>{<Outlet />}</div>
      <Footer />
    </div>
  )
}
