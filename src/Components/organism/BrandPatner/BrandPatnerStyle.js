import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const BrandPatnerStyle = styled.div`
  .brand-partner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 6rem 0;
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
`

export default BrandPatnerStyle
