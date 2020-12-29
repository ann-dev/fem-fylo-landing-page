import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const NavigationWrapper = styled.nav`
  background-color: ${COLORS.background_intro};
  padding: 24px;
  @media ${DEVICES.laptopM} {
    padding: 73px 80px;
    padding-bottom: 50px;
  }
`

export const NavigationContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: auto;
  margin: auto;
  width: 100%;
  @media ${DEVICES.laptopM} {
    max-width: 1400px;
  }
`

export const NavigationLogo = styled.img`
  width: 80px;
  @media ${DEVICES.mobileL} {
    width: 120px;
  }
  @media ${DEVICES.laptopM} {
    width: 175px;
  }
`

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 167px;
  @media ${DEVICES.mobileL} {
    width: 200px;
  }
  @media ${DEVICES.laptopM} {
    width: 271px;
  }
`

export const NavigationListItem = styled.li`
  font-family: "Raleway-Regular";
  font-size: 12px;
  transition: text-shadow .3s ease-in;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-shadow: 0 0 1px white, 0 0 1px white;
    }
  @media ${DEVICES.mobileL} {
    font-size: 14px;
  }
  @media ${DEVICES.laptopM} {
    font-size: 16px;
  }
`
