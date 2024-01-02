import React, { useState, useEffect } from 'react'
import { getProducts, currency } from '../products'

const HomeComponent = () => {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getProducts().then(setProduct)
  }, [])

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className='flex items-center text-sm lg:text-2xl '>
            <div className='flex-grow font-bold'>
              <a href='' className='text-md'>
                {product.name}
              </a>
            </div>
            <div className='flex-end'>{currency.format(product.price)}</div>
          </div>
          <div className='text-sm mt-4'>{product.description}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeComponent
