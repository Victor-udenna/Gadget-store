import React from 'react'
import ProductCardStyle from './BestSellerCardStyle'
import Img from '../../atoms/Image/Img'
import productImg from '../../../assets/Images/products/product2.png'
import Text from '../../atoms/Text/Text'

const ProductCard = () => {
  return (
    <ProductCardStyle>
      <div className="product-card">
        <div className="product-img-container">
          <Img className={'product-img'} image={productImg} />
        </div>
        <div>
          <Text
            className={'product-title'}
            value={'Lenovo 65W USB Type C laptop charger'}
          />
        </div>
      </div>
    </ProductCardStyle>
  )
}

export default ProductCard
