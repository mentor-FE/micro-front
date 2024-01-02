import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import PDPComponent from './PDPContent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'product/:id',
        element: <PDPComponent />,
      },
    ],
  },
])
