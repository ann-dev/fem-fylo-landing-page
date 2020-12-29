import styled from "styled-components"
import { DEVICES } from "src/constants/DEVICES"

export const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 35px;
  @media ${DEVICES.mobileL} {
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 50px;
  }
  @media ${DEVICES.laptopM} {
    font-size: 16px;
    line-height: 24px;
    margin-top: 34px;
  }
  .contact--item-margin {
    margin-bottom: 16px;
  }
  .location-icon {
    height: 18px;
    @media ${DEVICES.laptopM} {
      margin-right: 28px;
    }
  }
  .email-icon {
    margin-left: -5px;
    height: 14px;
    width: auto;
    @media ${DEVICES.laptopM} {
      margin-top: 4px;
    }
  }
  .phone-icon {
    @media ${DEVICES.laptopM} {
      margin-left: -5px;
      margin-top: -5px;
      width: 18px;
    }
  }
`

export const ContactItemsWrapper = styled.div`
  @media ${DEVICES.mobileL} {
    margin-left: 50px;
  }
  @media ${DEVICES.laptopM} {
    margin-left: 75px;
  }
`

export const ContactItem = styled.div`
  display: flex;
  span {
    line-height: 24px;
    margin-top: -5px;
    max-width: 280px;
  @media ${DEVICES.laptopM} {
    max-width: 350px;
  }
  }
`

export const ContactItemIcon = styled.img`
  height: 100%;
  margin-right: 16px;
  width: 13px;
`
