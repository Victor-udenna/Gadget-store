import React from 'react'
import BrandPatnerStyle from './BrandPatnerStyle'
import Img from '../../atoms/Image/Img'
import DellImg from '../../../assets/Images/dell-logo.svg'
import AcerImg from '../../../assets/Images/acer-logo.svg'
import AppleImg from '../../../assets/Images/apple-logo.svg'
import LenovoImg from '../../../assets/Images/lenovo-logo.png'
import HpImg from '../../../assets/Images/hp-logo.png'
import msImg from '../../../assets/Images/ms-logo.png'

const BrandPanter = () => {
  return (
    <BrandPatnerStyle>
      <section className=" container brand-partner">
        <h2 className="">Brands We Deal With</h2>
        <div className="brand-logo-container">
          <Img className={'brandlogo'} image={DellImg} alt={'dell logo'} />
          <Img className={'brandlogo'} image={AppleImg} alt={'dell logo'} />
          <Img className={'brandlogo'} image={LenovoImg} alt={'dell logo'} />
          <Img className={'brandlogo'} image={HpImg} alt={'dell logo'} />
          <Img className={'brandlogo'} image={AcerImg} alt={'dell logo'} />
          <Img className={'brandlogo'} image={msImg} alt={'dell logo'} />
        </div>
      </section>
    </BrandPatnerStyle>
  )
}

export default BrandPanter
