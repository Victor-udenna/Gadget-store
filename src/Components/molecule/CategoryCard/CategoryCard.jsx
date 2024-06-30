import React from 'react'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import product from '../../../assets/Images/products/acer.png'
import CategoryCardStyle from './CategoryCardStyle'

const CategoryCard = () => {
  return (
    <CategoryCardStyle>
      <div className="category-card">
        <Img image={product} className={'card-img'} />
        <Text className={"product-title"} value={'Computer'} />
      </div>
    </CategoryCardStyle>
  )
}

export default CategoryCard
