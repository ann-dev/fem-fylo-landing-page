import React from "react"
import Logo from "assets/images/logo.svg"
import {
  NavigationWrapper,
  NavigationLogo,
  NavigationList,
  NavigationListItem,
} from "./styles"

const Navigation = () => (
  <NavigationWrapper>
    <NavigationLogo src={Logo} alt="Fylo logo" />
    <NavigationList>
      <NavigationListItem>Features</NavigationListItem>
      <NavigationListItem>Team</NavigationListItem>
      <NavigationListItem>Sign In</NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
