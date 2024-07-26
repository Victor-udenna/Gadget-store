import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const BrandPatnerStyle = styled.div`
  .brand-partner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 6rem 15px;
    gap: 120px;
  }

  .brand-partner-text {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.2px;
    text-align: left;
    color: ${Colors.black};
  }

  .brand-logo-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 105px;
      height: 105px;
    }
  }

  @media screen and (max-width: 576px) {
    .brand-logo-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: auto;
      gap: 1rem;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .brand-logo-container::-webkit-scrollbar {
      display: none;
    }

    .brand-logo-container img {
      width: 55px;
      height: 55px;
    }
  }
`

export default BrandPatnerStyle
