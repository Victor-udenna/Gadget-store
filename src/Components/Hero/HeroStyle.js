import styled from 'styled-components'
import Colors from '../../helpers/Colors'
import heroBg from '../../assets/Images/heroBg.svg'

const HeroStyle = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem 0px;
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
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
`

export default HeroStyle
