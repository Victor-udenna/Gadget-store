import React from 'react'
import BrandFeatureStyle from './BrandFeatureStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import shippingimg from '../../../assets/icons/freeshiping.svg'
import supportImg from '../../../assets/icons/clock.svg'
import starImg from '../../../assets/icons/star.svg'
import swiftImg from '../../../assets/icons/light.svg'

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
                value={'COMPLIMENTARY SHIPPING'}
                className={'feature-card-headertext'}
              />
              <Text
                value={'Speedy and dependable delivery'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={swiftImg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'PROMPT SERVICE'}
                className={'feature-card-headertext'}
              />
              <Text
                value={'Efficient and trustworthy delivery'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={supportImg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'ROUND-THE-CLOCK SUPPORT'}
                className={'feature-card-headertext'}
              />
              <Text
                value={'Available customer service'}
                className={'feature-card-desc'}
              />
            </div>
          </div>
        </div>

        <div className="feature-card">
          <Img
            alt={'feature-icon'}
            className={'feature-card-img'}
            image={starImg}
          />
          <div>
            <div className="text-container">
              <Text
                value={'PREMIUM QUALITY'}
                className={'feature-card-headertext'}
              />
              <Text
                value={'Top-tier and reliable products'}
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
