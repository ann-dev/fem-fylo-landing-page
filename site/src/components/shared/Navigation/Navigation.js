import React from "react"
import { Link } from "gatsby"

import Logo from "assets/images/logo.svg"
import {
  NavigationWrapper,
  NavigationContentWrapper,
  NavigationLogo,
  NavigationList,
  NavigationListItem,
} from "./styles"

const Navigation = () => (
  <NavigationWrapper>
    <NavigationContentWrapper>
      <Link to="/">
        <NavigationLogo src={Logo} alt="Fylo logo" />
      </Link>
      <NavigationList>
        <NavigationListItem>Features</NavigationListItem>
        <NavigationListItem>Team</NavigationListItem>
        <NavigationListItem>Sign In</NavigationListItem>
      </NavigationList>
    </NavigationContentWrapper>
  </NavigationWrapper>
)

export default Navigation
