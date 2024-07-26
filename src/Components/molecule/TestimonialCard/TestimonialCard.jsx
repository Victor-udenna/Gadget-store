import React from 'react'
import TestimonialCardStyle from './TestimonialCardStyle'
import Img from '../../atoms/Image/Img'
import quoteIcon from '../../../assets/icons/quote-icon.svg'
import Text from '../../atoms/Text/Text'

const TestimonialCard = ({ text, name }) => {
  return (
    <TestimonialCardStyle>
      <div className="testimonial-card">
        <Img className={'quote-icon'} image={quoteIcon} alt="Quote Icon" />
        <Text
          className="testimonial-card-text"
          value={text}
        />
        <div className="avatar-info">
          <Text className={'avatar-name'} value={name} />
        </div>
      </div>
    </TestimonialCardStyle>
  )
}

export default TestimonialCard
