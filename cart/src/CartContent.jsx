import React, { useState, useEffect } from 'react'
import Login from './Login'
import { login, jwt } from './cart'

export default function CartContent() {
  const [token, setToken] = useState('')

  useEffect(() => {
    return jwt.subscribe((value) => {
      setToken(value ?? '')
    })
  }, [])

  return (
    <div>
      <div className=''>
        JWT: {token}
        <Login />
      </div>
    </div>
  )
}
