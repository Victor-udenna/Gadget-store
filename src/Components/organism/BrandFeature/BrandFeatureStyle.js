import styled from 'styled-components'
import Colors from '../../../helpers/Colors'
const BrandFeatureStyle = styled.div`
  .brand-feature {
    padding: 5rem 0px 4rem 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .feature-card {
    display: flex;
    align-items: center;
    gap: 22px;

    img {
      width: 57px;
      height: 57px;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .feature-card-headtext {
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 16.94px;
      text-align: left;
      color: ${Colors.black};
    }

    .feature-card-desc {
      font-family: Inter;
      font-size: 13px;
      font-weight: 500;
      line-height: 14.52px;
      text-align: left;
      color: ${Colors.dark};
    }
  }

  @media screen and (max-width: 992px) {
    .brand-feature {
      padding: 5rem 15px 2rem 15px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .feature-card {
      gap: 14.16px;

      .text-container {
        gap: 7.7px;
      }

      .feature-card-headtext {
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 10.91px;
        text-align: left;
      }

      .feature-card-desc {
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 9.35px;
        text-align: left;
        
      }
    }
  }

  @media screen and (max-width: 576px) {
    .brand-feature {
      padding: 5rem 15px 2rem 15px;
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    .feature-card {
      gap: 14.16px;
      img {
        width: 52px;
        height: 52px;
      }

      .text-container {
        gap: 5.5px;
      }

    }
  }
`

export default BrandFeatureStyle
