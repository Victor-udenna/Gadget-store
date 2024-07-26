import React from 'react'
import TestimonialStyle from './TestimonialStyle'
import TestimonialCard from '../../molecule/TestimonialCard/TestimonialCard'
import Text from '../../atoms/Text/Text'

const testimonials = [
  {
    text: 'The sales and service team provided excellent support for our laptops and monitors. Their repair services are top-notch and keep everything running smoothly..',
    name: 'Alice Johnson',
  },
  {
    text: 'We had a great experience with their corporate CPU and laptop sales. Their software installation service was seamless and very professional.',
    name: 'Bob Smith',
  },
  {
    text: 'Excellent service from start to finish! The team efficiently handled our monitor setup and provided quick repair services when needed.',
    name: 'Charlie Brown',
  },
  {
    text: 'Their service for corporate devices is outstanding. The repair service was quick, and their advice on software installation was very helpful.',
    name: 'Diana Prince',
  },
  {
    text: 'Great experience with the sales team. They provided us with quality laptops and monitors, and their support for software installation was invaluable.',
    name: 'Edward Davis',
  },
  {
    text: 'Highly recommend their services for any corporate needs. The repair team is efficient, and their advice on the latest CPUs and laptops is spot on.',
    name: 'Fiona Green',
  },
]

const Testimonial = () => {
  return (
    <TestimonialStyle>
      <div className="container testimonial">
        <h2 className="testimonial-header">Don’t just take our word for it</h2>
        <Text
          className={'testimonial-header-desc'}
          value={'Hear from our customers'}
        />

        <div className="testimonial-card-container desktop">
          <div className="testimonial-card-list">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </div>
          <div className="testimonial-card-list" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </div>
        </div>

        <div className="testimonial-card-container mobile">
          <div className="testimonial-card-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </div>
        </div>
      </div>
    </TestimonialStyle>
  )
}

export default Testimonial
