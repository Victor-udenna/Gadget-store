import styled from 'styled-components'

const BestSellerStyle = styled.div`
  .best-seller {
    padding: 4rem 0px;
  }
  .best-seller-header {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;
    text-align: left;
    align-self: flex-start;
    padding-bottom: 3.5rem;
  }

  .product-card-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
    grid-auto-rows: minmax(236px, auto);
    grid-auto-flow: dense;
    gap: 27px;
  }
`

export default BestSellerStyle
