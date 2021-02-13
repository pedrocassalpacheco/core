import React, { lazy } from 'react'

const ProductTable = lazy(() => import('./ProductTable'))

const Products = () => {
  return (
    <>
      <ProductTable/>
    </>
  )
}

export default Products
