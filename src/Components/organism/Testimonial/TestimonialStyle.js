import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const TestimonialStyle = styled.div`
  .testimonial {
    padding: 5.3rem 15px;
  }

  .testimonial-header {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    line-height: 38.73px;
    text-align: left;
    color: ${Colors.black};
    padding-bottom: 1.2rem;
  }

  .testimonial-header-desc {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;
    color: ${Colors.neutralTxt};
    padding-bottom: 0.5rem;
  }

  .testimonial-card-container {
    margin-top: 2rem;
  }

  .testimonial-card-container.desktop {
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    --gap: 1rem;
  }

  .testimonial-card-list {
    display: flex;
    gap: var(--gap);
    animation: scroll 25s linear infinite;
  }

  .testimonial-card-container.desktop:hover .testimonial-card-list {
    animation-play-state: paused;
  }

  @keyframes scroll {
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }

  .testimonial-card-container.mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .testimonial-card-container.desktop {
      display: none;
    }

    .testimonial-card-container.mobile {
      display: block;
      padding: 15px;
    }

    .testimonial-card-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`

export default TestimonialStyle
