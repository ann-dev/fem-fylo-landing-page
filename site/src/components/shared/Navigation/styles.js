import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const NavigationWrapper = styled.nav`
  align-items: center;
  background-color: ${COLORS.background_intro};
  display: flex;
  justify-content: space-between;
  padding: 24px;
`

export const NavigationLogo = styled.img`
  width: 80px;
`

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 167px;
`

export const NavigationListItem = styled.li`
  font-family: "Raleway-Regular";
  font-size: 12px;
  &:hover {
    color: ${COLORS.accent_cyan};
  }
`
