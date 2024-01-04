import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet } from 'react-router-dom'
import Header from './ui/Header'
import HomeContent from './ui/HomeContent'
import Footer from './ui/Footer'

import 'remixicon/fonts/remixicon.css'
import './index.scss'


const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10 px-5 xl:px-0'>
      {/* <HomeContent /> */}
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default App
