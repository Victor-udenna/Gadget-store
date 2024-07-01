import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const NotFoundTemplateStyle = styled.div`
  .error-ui {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    .error_img {
      width: 400px;
    }

    .error-header-text {
      font-weight: 600;
      font-size: 22px;
    }

    .error-description {
      text-align: center;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    button {
      font-weight: 500;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      border: none;
    }

    .home-btn {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background-color: ${Colors.brand};
      font-weight: 500;
      padding: 16px;
      font-size: 16px;
      font-family: inherit;
      gap: 8px;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 576px) {
    .error-ui {
      padding: 16px;
      .error_img {
        width: 250px;
      }

      .error-header-text {
        font-weight: 600;
        font-size: 22px;
        margin-top: 20px;
      }
    }
  }
`

export default NotFoundTemplateStyle
