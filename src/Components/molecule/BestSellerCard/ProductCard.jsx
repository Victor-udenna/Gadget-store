import React from 'react'
import ProductCardStyle from './BestSellerCardStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'

const ProductCard = ({ image, title }) => {
  return (
    <ProductCardStyle>
      <div className="product-card">
        <div className="product-img-container">
          <Img className={'product-img'} image={image} />
        </div>
        <div>
          <Text
            className={'product-title'}
            value={title}
          />
        </div>
      </div>
    </ProductCardStyle>
  );
}


export default ProductCard