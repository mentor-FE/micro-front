import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

const Header = lazy(() => import('home/Header'))
const Footer = lazy(() => import('home/Footer'))

const App = () => {
  const [showHeader, setShowHeader] = useState(true)
  return (
    <div className='text-3xl mx-auto max-w-6xl'>

      {showHeader && (
        <Suspense fallback={`<div>Loadeing Header component...</div>`}>
          <Header />
        </Suspense>
      )}
      <button onClick={() => setShowHeader(!showHeader)} className={`text-3xl p-5 ${showHeader ? 'bg-gray-300' : 'bg-blue-300'}`}>{showHeader ? 'Hide' : 'Show'} the Header</button>
      <div className='my-10'>PDP Page Content</div>

      <Suspense fallback={`<div>Loadeing Footer component...</div>`}>
        <Footer />
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
