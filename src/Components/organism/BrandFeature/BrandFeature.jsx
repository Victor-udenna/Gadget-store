import React from 'react'
import BrandFeatureStyle from './BrandFeatureStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import shippingimg from '../../../assets/icons/freeshiping.svg'

const BrandFeature = () => {
  return (
    <BrandFeatureStyle>
      <section className="container brand-feature">
        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={shippingimg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'FREE SHIPPING'}
                className={'feature-card-headettext'}
              />
              <Text
                value={'Fast and reliable delivery'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={shippingimg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'SWIFT TRANSACT'}
                className={'feature-card-headettext'}
              />
              <Text
                value={'Fast and reliable delivery'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={shippingimg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'24/7 SUPPORT'}
                className={'feature-card-headettext'}
              />
              <Text
                value={'Stand-by customer service'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={shippingimg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'BEST QUALITY'}
                className={'feature-card-headettext'}
              />
              <Text
                value={'Fast and reliable delivery'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>
      </section>
    </BrandFeatureStyle>
  )
}

export default BrandFeature
