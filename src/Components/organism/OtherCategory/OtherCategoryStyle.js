import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const OtherCategoryStyle = styled.div`
  .category {
    padding: 4rem 0px;
  }

  .category-header {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;
    text-align: left;
    padding-bottom: 3.5rem;
    color: ${Colors.black};
  }

  .category-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    grid-auto-rows: minmax(192px, auto);
    grid-auto-flow: dense;
    gap: 22px;
  }

  @media screen and (max-width: 576px) {
    .category {
      padding: 15px;
    }
    .category-card-container {
      /* padding: 0 15px; */
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
      grid-auto-rows: minmax(192px, auto);
      grid-auto-flow: dense;
      gap: 22px;
    }

    .category-header {
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 16.94px;
      text-align: left;
    }
  }
`

export default OtherCategoryStyle
