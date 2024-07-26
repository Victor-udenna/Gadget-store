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
        <h2 className="our-service-header">Our Offerings</h2>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={laptopsalesImg} className="service-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Laptop Sales'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="We offer a wide range of laptops from leading brands to meet your needs. Whether you're looking for a powerful gaming laptop or a sleek and portable ultrabook, we have the perfect laptop for you. Our knowledgeable staff can help you find the best laptop to fit your budget and requirements."
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={soffinstallImg} className="service-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Software Setup'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Our experts can help you install and configure software to suit your specific requirements. From operating systems to productivity software and specialized applications, we ensure a seamless setup process so you can start using your software immediately without any hassle."
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={repairImg} className="service-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Laptop Repairs'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="We provide comprehensive repair services to ensure your laptop runs smoothly. Whether it's a hardware issue like a broken screen or a software problem causing your laptop to slow down, our experienced technicians can diagnose and fix the issue quickly and efficiently."
              />
            </div>
          </div>
          <div className="service-card">
            <div className="service-cardimg-container">
              <Img image={bulkImg} className="service-cardimg" />
            </div>
            <div className="service-cardtext-container">
              <Text
                className={'ourservice-card-header'}
                value={'Bulk Accessory Sales'}
              />
              <Text
                className={'ourservice-card-desc'}
                value="Purchase accessories in bulk and enjoy special discounts for large orders. We offer a wide range of accessories including chargers, mouse, keyboards, and more. Our bulk sales service is perfect for businesses, schools, and organizations looking to equip their teams with the necessary tech accessories."
              />
            </div>
          </div>
        </div>
      </section>
    </OurServiesStyle>
  )
}

export default OurService
