import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const PosterStyle = styled.div`
  .poster {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
      90deg,
      #8b0000 6.78%,
      #ff6347 53.65%,
      #ff4500 62.48%,
      #b22222 100%
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

  .poster-img {
    width: 595px;
    height: 595px;
  }

  @media screen and (max-width: 992px) {
    .poster {
      display: flex;
      flex-direction: column;
      padding: 2.3rem 1.5rem;
    }

    .poster-header {
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
      text-align: left;
    }

    .poster-text {
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
    }

    .poster-img {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (max-width: 576px) {
    .poster {
      display: flex;
      flex-direction: column;
      height: 406px;
      border-radius: 0px;
      padding: 1.7rem 1.1rem;
    }

    .poster-header {
      font-family: Inter;
      font-size: 22px;
      font-weight: 600;
      line-height: 26.63px;
      text-align: left;
    }

    .poster-text {
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 14.52px;
      text-align: left;
    }

    .poster-img {
      width: 344px;
      height: 344px;
    }
  }
`

export default PosterStyle
