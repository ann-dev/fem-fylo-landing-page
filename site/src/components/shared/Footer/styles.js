import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.background_footer};
  padding: 80px 24px 52px;
  @media ${DEVICES.mobileL} {
    padding: 50px;
  }
  @media ${DEVICES.laptopM} {
    padding: 85px 120px;
    padding-right: 80px;
  }
`

export const FooterContainer = styled.div`
  margin: auto;
  @media ${DEVICES.laptopM} {
    max-width: 1300px;
  }
`

export const FooterLogo = styled.img`
  margin-left: 11px;
  width: 108px;
  @media ${DEVICES.mobileL} {
    margin-left: 0;
  }
  @media ${DEVICES.laptopM} {
    width: 175px;
  }
`

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${DEVICES.laptopM} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  @media ${DEVICES.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
  }
  @media ${DEVICES.laptopM} {
    margin-left: 28px;
    width: 230px;
  }
`

export const FooterLinksList = styled.ul`
  margin-top: 48px;
  @media ${DEVICES.laptopM} {
    margin-top: 28px;
  }
  li {
    font-size: 16px;
    transition: text-shadow .3s ease-in;
    &:hover {
      cursor: pointer;
      text-shadow: 0 0 1px white, 0 0 1px white;
    }
  }
  .item-margin {
    margin-bottom: 16px;
  }
`

export const SocialsSection = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin: auto;
  margin-top: 56px;
  width: 104px;
  @media ${DEVICES.mobileL} {
    margin-left: 0;
  }
  @media ${DEVICES.laptopM} {
    margin: 0;
    margin-top: 28px;
    width: 120px;
  }
`

export const SocialsLogo = styled.img`
  height: auto;
  width: 28px;
  &:hover {
    cursor: pointer;
  }
`
