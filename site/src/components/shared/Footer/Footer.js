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
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </FooterLinksList>
          <FooterLinksList>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy</Link>
            </li>
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
