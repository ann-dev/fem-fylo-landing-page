import React from "react"

import Logo from "assets/images/logo.svg"
import ContactSection from "./ContactSection/ContactSection"
import Attribution from "./Attribution/Attribution"
import {
  FooterWrapper,
  FooterLogo,
  FooterList,
  SocialsSection,
  SocialsLogo,
} from "./styles"
import LogoFacebook from "assets/images/logo-facebook.svg"
import LogoInstagram from "assets/images/logo-instagram.svg"
import LogoTwitter from "assets/images/logo-twitter.svg"

const Footer = () => (
  <FooterWrapper>
    <FooterLogo src={Logo} alt="Fylo company logo" />
    <ContactSection />
    <div>
      <FooterList>
        <li className="item-margin">About Us</li>
        <li className="item-margin">Jobs</li>
        <li className="item-margin">Press</li>
        <li>Blog</li>
      </FooterList>
      <FooterList>
        <li className="item-margin">Contact Us</li>
        <li className="item-margin">Terms</li>
        <li>Privacy</li>
      </FooterList>
    </div>
    <SocialsSection>
      <SocialsLogo src={LogoFacebook} alt="Facebook logo icon" />
      <SocialsLogo src={LogoTwitter} alt="Facebook logo icon" />
      <SocialsLogo src={LogoInstagram} alt="Facebook logo icon" />
    </SocialsSection>
    <Attribution />
  </FooterWrapper>
)

export default Footer
