import React from "react"
import { Link } from "gatsby"

import Logo from "assets/images/logo.svg"
import ContactSection from "./ContactSection/ContactSection"
import Attribution from "./Attribution/Attribution"
import {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  FooterContentWrapper,
  FooterLinks,
  FooterLinksList,
  SocialsSection,
  SocialsLogo,
} from "./styles"
import LogoFacebook from "assets/images/logo-facebook.svg"
import LogoInstagram from "assets/images/logo-instagram.svg"
import LogoTwitter from "assets/images/logo-twitter.svg"

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <Link to="/">
        <FooterLogo src={Logo} alt="Fylo company logo" />
      </Link>
      <FooterContentWrapper>
        <ContactSection />
        <FooterLinks>
          <FooterLinksList>
            <li className="item-margin">About Us</li>
            <li className="item-margin">Jobs</li>
            <li className="item-margin">Press</li>
            <li>Blog</li>
          </FooterLinksList>
          <FooterLinksList>
            <li className="item-margin">Contact Us</li>
            <li className="item-margin">Terms</li>
            <li>Privacy</li>
          </FooterLinksList>
        </FooterLinks>
        <SocialsSection>
          <SocialsLogo src={LogoFacebook} alt="Facebook logo icon" />
          <SocialsLogo src={LogoTwitter} alt="Facebook logo icon" />
          <SocialsLogo src={LogoInstagram} alt="Facebook logo icon" />
        </SocialsSection>
      </FooterContentWrapper>
      <Attribution />
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
