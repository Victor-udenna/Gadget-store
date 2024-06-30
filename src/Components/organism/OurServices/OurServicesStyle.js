import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const OurServiesStyle = styled.div`
  .our-services {
    padding: 4rem 0px 6rem 0px;
  }

  .our-service-header {
    font-family: Inter;
    font-size: 21px;
    font-weight: 500;
    line-height: 25.41px;
    text-align: left;
    color: ${Colors.black};
    text-align: center;
    padding-bottom: 5rem;
  }

  .service-card-container {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }


    .service-card {
  height: 296px; 
  width: 500px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  align-items: start;
  gap: 1.1rem; 
}

.service-cardimg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.cardBg};
  height: 296px; 
}

.service-cardimg-container img {
  width: 296px;
}

  .service-cardtext-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 29.46px;
    background-color: ${Colors.white};
  }

  .ourservice-card-header {
    font-family: Inter;
    font-size: 18.2px;
    font-weight: 400;
    line-height: 22.02px;
    text-align: left;
    color: ${Colors.black};
    padding-top: 1.1rem;
  }

  .ourservice-card-desc {
    font-family: Inter;
    font-size: 13.26px;
    font-weight: 400;
    line-height: 20.63px;
    text-align: left;
    color: ${Colors.dark};
  }
`

export default OurServiesStyle
