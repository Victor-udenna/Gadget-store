import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const RequestFormStyle = styled.div`
  position: relative;
  .request-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    height: 550px;
    background: linear-gradient(
      90deg,
      #8b0000 6.78%,
      #ff6347 53.65%,
      #ff4500 62.48%,
      #b22222 100%
    );
    border-radius: 8px;
    padding: 1.75rem 0px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .request-header-text {
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    line-height: 43.57px;
    text-align: left;
    color: ${Colors.white};
  }

  .input-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .input-container {
    display: flex;
    align-items: start;
    flex-direction: column;
    padding-bottom: 16px;
    label {
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 13.31px;
      text-align: left;
      padding-bottom: 4px;
      color: ${Colors.labelTxt};
      cursor: pointer;
      padding-bottom: 8px;
    }

    label {
      span {
        color: ${Colors.danger};
        font-weight: bold;
      }
    }

    .error {
      color: ${Colors.danger};
      font-weight: bold;
    }

    input {
      width: 250px;
      height: 42px;
      padding: 8px;
      border-radius: 8px;
      color: ${Colors.black};
      border: 1px solid ${Colors.inputBorder};
      font-family: Inter;
    }
    textarea {
      width: 100%;
      height: 94px;
      padding: 8px;
      border-radius: 8px;
      color: ${Colors.black};
      border: 1px solid ${Colors.inputBorder};
      resize: none;
      font-family: Inter;
    }
  }

  input:focus,
  textarea:focus {
    outline: 2px solid ${Colors.neutral};
  }
  .request-btn {
    width: 130px;
    height: 45px;
    background-color: ${Colors.brand};
    color: ${Colors.white};
    border-radius: 3.62px;
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 13.04px;
    text-align: center;
    margin-top: 8px;
    border: 1px solid ${Colors.disabled};
  }

  .request-btn.disabled {
    background-color: ${Colors.disabled};
    cursor: no-drop;
  }

  @media screen and (max-width: 576px) {
    .request-container {
      border-radius: 0px;
      height: fit-content;
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`
export default RequestFormStyle
