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
`

export default BrandFeatureStyle
