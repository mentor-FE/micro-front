import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'home/Header'
import Footer from 'home/Footer'
import SafeComponent from './SafeComponent'
import PDPComponent from './PDPContent'

import './index.scss'
//Replace Switch with Routes.

const App = () => {
  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className='my-10'>
        <PDPComponent />
      </div>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
