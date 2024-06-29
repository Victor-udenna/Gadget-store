import React from 'react'
import BestSellerStyle from './BestSellerStyle'
import ProductCard from '../../molecule/BestSellerCard/ProductCard'

const BestSeller = () => {
  return (
    <BestSellerStyle>
      <section className="container best-seller">
        <h2 className="best-seller-header">Our Best Sellers</h2>
        <div className='product-card-container'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </BestSellerStyle>
  )
}

export default BestSeller
