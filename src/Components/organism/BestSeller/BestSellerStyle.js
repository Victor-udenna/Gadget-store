import styled from 'styled-components'

const BestSellerStyle = styled.div`
  .best-seller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 27px;
  }
`

export default BestSellerStyle
