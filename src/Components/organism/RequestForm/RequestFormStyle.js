import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const RequestFormStyle = styled.div`
  .request-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    background: linear-gradient(
      90deg,
      #77582a 6.78%,
      #d49d4b 53.65%,
      #d9a14c 62.48%,
      #735528 100%
    );
    border-radius: 8px;
    padding: 1.75rem 0px;
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

    input {
      width: 250px;
      height: 42px;
      padding: 8px;
      border-radius: 8px;
      color: ${Colors.black};
      border: 1px solid ${Colors.inputBorder};
    }
    textarea {
      width: 100%;
      height: 94px;
      padding: 8px;
      border-radius: 8px;
      color: ${Colors.black};
      border: 1px solid ${Colors.inputBorder};
      resize: none;
    }
  }

  input:focus,
  textarea:focus {
    outline: 2px solid ${Colors.brand};
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
  }
`
export default RequestFormStyle
