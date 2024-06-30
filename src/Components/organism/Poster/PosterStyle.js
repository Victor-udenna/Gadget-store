import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const PosterStyle = styled.div`
  .poster {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
      90deg,
      #77582a 6.78%,
      #d49d4b 53.65%,
      #d9a14c 62.48%,
      #735528 100%
    );
    height: 347px;
    padding: 0px 56px;
    border-radius: 8px;
    margin: 4rem auto;
  }

  .poster-text-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }

  .poster-header {
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 48.41px;
    text-align: left;
    color: ${Colors.white};
  }

  .poster-text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    width: 90%;
    color: ${Colors.lightText};
  }

  .banner-img {
    width: 595px;
    height: 595px;
  }
`

export default PosterStyle
