import React from 'react'
import OtherCategoryStyle from './OtherCategoryStyle'
import CategoryCard from '../../molecule/CategoryCard/CategoryCard'
import samsumgMonitor from '../../../assets/Images/products/28-m.webp'
import t14 from '../../../assets/Images/products/t14.png'
import mouse from '../../../assets/Images/products/mouse.png'
import desktop from '../../../assets/Images/products/idea-center.png'
import macstudio from '../../../assets/Images/products/mac-studio.png'
import egornomicChair from '../../../assets/Images/products/chair.png'

const OtherCategory = () => {
  return (
    <OtherCategoryStyle>
      <section className="container category">
        <h2 className="category-header">Our Categories</h2>
        <div className="category-card-container">
          <CategoryCard image={samsumgMonitor} title={'Monitor'} />
          <CategoryCard image={t14} title={'Buisness Laptop'} />
          <CategoryCard image={desktop} title={'Desktop'} />
          <CategoryCard image={egornomicChair} title={'Office Furniture'} />
          <CategoryCard image={mouse} title={'Computer Accesories'} />
          <CategoryCard image={macstudio} title={'Work Station'} />
        </div>
      </section>
    </OtherCategoryStyle>
  )
}

export default OtherCategory
