import styled from 'styled-components'

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
  }

  .category-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    grid-auto-rows: minmax(192px, auto);
    grid-auto-flow: dense;
    gap: 22px;
  }
`

export default OtherCategoryStyle
