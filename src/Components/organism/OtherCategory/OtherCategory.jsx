import React from 'react'
import OtherCategoryStyle from './OtherCategoryStyle'
import CategoryCard from '../../molecule/CategoryCard/CategoryCard'

const OtherCategory = () => {
  return (
    <OtherCategoryStyle>
      <section className="container category">
        <h2 className="category-header">Other Categories</h2>
        <div className="category-card-container">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </OtherCategoryStyle>
  )
}

export default OtherCategory
