import React from 'react'
import OurServiesStyle from './OurServicesStyle'
import Img from '../../atoms/Image/Img'
import laptopsalesImg from '../../../assets/Images/laptop-sales.svg'
import soffinstallImg from '../../../assets/Images/software-installation.svg'
import repairImg from '../../../assets/Images/laptop-repair.svg'
import bulkImg from '../../../assets/Images/bulk-purchase.svg'
import Text from '../../atoms/Text/Text'

const OurService = () => {
  return (
    <OurServiesStyle>
      <section className="container our-services">
        <h2 className="our-service-header">Services We Offer</h2>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={laptopsalesImg} className="servie-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Laptop Sales'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Lorem ipsum dolor sit amet consectetur. Pharetra ac in viverra facili
              si tristique sed sem. Faucibus pellentesque dolor orci turpis augue. Vel sit at amet faucibus tellus arcu.
               Netus venenatis nibh a urna auctor quam enim. Mauris massa sit nunc tortor at duis m enim. Mauris massa sit nunc tortor at duis.
        "
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={soffinstallImg} className="servie-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Software Installation'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Lorem ipsum dolor sit amet consectetur. Pharetra ac in viverra facili
              si tristique sed sem. Faucibus pellentesque dolor orci turpis augue. Vel sit at amet faucibus tellus arcu.
               Netus venenatis nibh a urna auctor quam enim. Mauris massa sit nunc tortor at duis m enim. Mauris massa sit nunc tortor at duis."
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={repairImg} className="servie-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Laptop Repairs'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Lorem ipsum dolor sit amet consectetur. Pharetra ac in viverra facili
              si tristique sed sem. Faucibus pellentesque dolor orci turpis augue. Vel sit at amet faucibus tellus arcu.
               Netus venenatis nibh a urna auctor quam enim. Mauris massa sit nunc tortor at duis m enim. Mauris massa sit nunc tortor at duis."
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={bulkImg} className="servie-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Buck Sale of Accessories'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Lorem ipsum dolor sit amet consectetur. Pharetra ac in viverra facili
              si tristique sed sem. Faucibus pellentesque dolor orci turpis augue. Vel sit at amet faucibus tellus arcu.
               Netus venenatis nibh a urna auctor quam enim. Mauris massa sit nunc tortor at duis m enim. Mauris massa sit nunc tortor at duis."
              />
            </div>
          </div>
        </div>
      </section>
    </OurServiesStyle>
  )
}

export default OurService
