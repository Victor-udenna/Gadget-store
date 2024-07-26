import React from 'react'
import BestSellerStyle from './BestSellerStyle'
import ProductCard from '../../molecule/BestSellerCard/ProductCard'
import mac13 from '../../../assets/Images/products/mac-13.png'
import hpSpectre from '../../../assets/Images/products/spectre-13.png'
import xps13img from '../../../assets/Images/products/xps-13.png'
import t14 from '../../../assets/Images/products/t14.png'
import samsumgMonitor from '../../../assets/Images/products/28-m.webp'
import macstudio from '../../../assets/Images/products/mac-studio.png'
import egornomicChair from '../../../assets/Images/products/chair.png'
import mouse from '../../../assets/Images/products/mouse.png'
import desktop from '../../../assets/Images/products/idea-center.png'
import mac14 from '../../../assets/Images/products/mac-14.png'

const BestSeller = () => {
  return (
    <BestSellerStyle>
      <section className="container best-seller">
        <h2 className="best-seller-header">Our Best Sellers</h2>
        <div className="product-card-container">
          <ProductCard image={t14} title={'Lenovo ThinkPad T14 Gen 4'} />
          <ProductCard image={mac13} title={'Apple Macbook pro 13 (M1)'} />
          <ProductCard
            image={hpSpectre}
            title={'Hp Spectre intel Evo (13.5)'}
          />
          <ProductCard
            image={samsumgMonitor}
            title={'Samsung 28inch IPS monitor'}
          />
          <ProductCard image={mac14} title={'Apple 14 inches MacBook Pro M3'} />
          <ProductCard image={mouse} title={'Logitech MX Master 3'} />
          <ProductCard
            image={macstudio}
            title={'Apple Mac Studio 3.2GHz M1 Max 10-Core 32GB 512GB'}
          />
          <ProductCard image={xps13img} title={'Dell XPS 13 Plus'} />
          <ProductCard
            image={egornomicChair}
            title={'Ergonomic Office Chair'}
          />
          <ProductCard
            image={desktop}
            title={'Lenovo IdeaCentre AIO 3i 24 All-in-One'}
          />
        </div>
      </section>
    </BestSellerStyle>
  )
}

export default BestSeller
