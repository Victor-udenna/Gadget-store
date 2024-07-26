import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const TestimonialCardStyle = styled.div`
  .testimonial-card {
    background-color: ${Colors.cardBg};
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 1.6rem;
    border-radius: 10px;
    height: 250px;
    width: 441px;
    cursor: pointer;
  }

  .testimonial-card-text {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: ${Colors.neutralTxt};
    padding: 1.8rem 0;
  }

  .quote-icon {
    width: 27.33px;
    height: 20.5px;
  }

  .avatar-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .avatar-name {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .testimonial-card {
      height: 200px;
      width: 100%;
      max-width: 410px;
    }

    .testimonial-card-text {
      font-size: 14px;
      line-height: 20px;
    }

    .avatar-name {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export default TestimonialCardStyle
