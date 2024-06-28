import React from 'react'
import SuccessPopupStyle from './SuccessPopupStyle'
import Img from '../../atoms/Image/Img'
import successIcon from '../../../assets/icons/success-icon.svg'
import Text from '../../atoms/Text/Text'

const SuccessPopup = ({ className }) => {
  return (
    <SuccessPopupStyle>
       <div className={`success-popup ${className}`}>
        <Img alt={'success-icon'} image={successIcon} />
        <div>
          <Text className={'success-header'} value={'Thank You!'} />
          <Text
            className={'success-text'}
            value={'We will reach out to you shortly!'}
          />
        </div>
      </div>
    </SuccessPopupStyle>
  )
}

export default SuccessPopup
