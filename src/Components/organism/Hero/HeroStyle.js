import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const HeroStyle = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    padding: 11.5rem 0px 6rem 0px;
    border-bottom: 2px solid red;
  }

  .hero-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  .hero-text-header {
    font-family: Inter;
    font-size: 42px;
    font-weight: 500;
    line-height: 63px;
    text-align: center;
    color: ${Colors.black};
  }

  .hero-text-desc {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    width: 50%;
    color: ${Colors.dark};
    margin: auto;
  }

  .hero-img {
    width: 662px;
  }

  span {
    color: ${Colors.brand};
  }

  @media screen and (max-width: 992px) {
    .hero-text-header {
      font-family: Inter;
      font-size: 30px;
      font-weight: 500;
      line-height: 43px;
      text-align: center;
    }

    .hero-text-desc {
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 21px;
      text-align: center;
      width: 75%;
    }

    .hero-img {
      width: 440px;
    }
  }

  @media screen and (max-width: 576px) {
    .hero {
      padding: 8.5rem 0px 1rem 0px;
    }
    .hero-text-header {
      font-family: Inter;
      font-size: 25px;
      font-weight: 500;
      line-height: 37.5px;
      text-align: center;
    }

    .hero-text-desc {
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      text-align: center;
      width: 75%;
    }

    .hero-img {
      width: 337px;
    }
  }
`

export default HeroStyle
