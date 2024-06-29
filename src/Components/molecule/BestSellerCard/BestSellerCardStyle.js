import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const ProductCardStyle = styled.div`
  .product-card {
    height: 335px;
  }

  .product-img-container {
    background-color: ${Colors.cardBg};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 45px;

    .product-img {
      width: 160px;
      height: 160px;
    }
  }

  .product-title {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: left;
    color: ${Colors.black};
    padding-top: 10px;
  }
`

export default ProductCardStyle
