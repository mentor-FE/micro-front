import { createBrowserRouter } from 'react-router-dom'

import PDPContent from 'pdp/PDPContent'
import HomeContent from 'home/HomeContent'
import CartContent from 'cart/CartContent'

import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeContent />,
      },
      {
        path: '/cart',
        element: <CartContent />,
      },
      {
        path: 'product/:id',
        element: <PDPContent />,
      },
    ],
  },
])