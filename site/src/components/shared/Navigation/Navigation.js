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
        <NavigationListItem>
          <Link to="/features">Features</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/team">Team</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/login">Sign In</Link></NavigationListItem>
      </NavigationList>
    </NavigationContentWrapper>
  </NavigationWrapper>
)

export default Navigation
