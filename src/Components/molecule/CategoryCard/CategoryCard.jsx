import React from 'react'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import CategoryCardStyle from './CategoryCardStyle'

const CategoryCard = ({ image, title }) => {
  return (
    <CategoryCardStyle>
      <div className="category-card">
        <Img image={image} className={'card-img'} />
        <Text className={'product-title'} value={title} />
      </div>
    </CategoryCardStyle>
  )
}

export default CategoryCard
