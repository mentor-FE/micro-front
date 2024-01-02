import React, { useState, useEffect } from 'react'
import { login, jwt } from './cart'

export default function CartContent() {
  const [token, setToken] = useState('')
  useEffect(() => {
    login('kristina', '123')
    return jwt.subscribe((value) => setToken(value ?? ''))
  }, [])

  return <div className=''>JWT: {token}</div>
}
