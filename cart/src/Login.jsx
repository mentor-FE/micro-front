import React, { useState, useEffect } from 'react'
import { login, useLoggedIn } from './cart'

export default function Login() {
  const loggedIn = useLoggedIn()
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('kristina')
  const [password, setPassword] = useState('123')

  if (loggedIn) return null

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className='ri-fingerprint-line text-2xl text-white' id='showlogin'></i>
      </span>
      {showLogin && (
        <div
          className='absolute p-5 border-4 border-blue-800 bg-white'
          style={{
            width: 300,
            top: '2rem',
            left: -260,
          }}
        >
          <input
            type='text'
            placeholder='User name'
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <input
            type='password'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <button
            className='block bg-green-900 text-white py-2 px-4 rounded-md mt-5'
            onClick={() => login(username, password)}
            id='logginbtn'
          >
            Войти
          </button>
        </div>
      )}
    </>
  )
}
