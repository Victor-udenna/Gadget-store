import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SuccessPopupStyle = styled.div`
  .success-popup {
    position: absolute;
    bottom: 0px;
    margin-bottom: -20px;
    background-color: ${Colors.successBg};
    padding: 10px 16px 10px 16px;
    border-radius: 8px;
    z-index: 100;
    display: flex;
    gap: 16px;
    left: 40%;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  .success-popup.show {
    opacity: 1;
    transform: translateY(0);
  }

  .success-popup.hide {
    opacity: 0;
    transform: translateY(-20px);
  }

  .success-header {
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
  }

  .success-text {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`

export default SuccessPopupStyle
