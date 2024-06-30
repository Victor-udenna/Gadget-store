import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const CategoryCardStyle = styled.div`
  .category-card {
    background-color: red;
    /* width: 175px; */
    height: 171px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0px 2px 2px 0px #0000001a;
    background-color: ${Colors.white};

    img {
      width: 112px;
      height: 112px;
    }
  }

  .product-title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
  }
`

export default CategoryCardStyle
