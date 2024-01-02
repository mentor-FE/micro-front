import React from 'react'
import ReactDOM from 'react-dom'
import {  RouterProvider } from 'react-router-dom'
import { App } from "./App"

import { router } from "./routs"
import './index.scss'


ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  document.getElementById('app')
)
