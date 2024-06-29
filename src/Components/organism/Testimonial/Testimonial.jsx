import React from 'react'
import TestimonialStyle from './TestimonialStyle'
import TestimonialCard from '../../molecule/TestimonialCard/TestimonialCard'
import Text from '../../atoms/Text/Text'

const Testimonial = () => {
  return (
    <TestimonialStyle>
      <div className="container testimonial">
        <h2 className="testimonial-header">Don’t just take our word for it</h2>
        <Text
          className={'testimonial-header-desc'}
          value={'Hear from our customers'}
        />

        <div className="testimonial-card-container">
          <div className="testimonial-card-list">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
          <div className="testimonial-card-list" aria-hidden="true">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </TestimonialStyle>
  )
}

export default Testimonial
