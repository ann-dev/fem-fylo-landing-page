import React from "react"

import IconLocation from "assets/images/icon-location.svg"
import IconPhone from "assets/images/icon-phone.svg"
import IconEmail from "assets/images/icon-email.svg"
import {
    ContactSectionWrapper,
    ContactItem,
    ContactItemIcon,
  } from "./styles"

const ContactSection = () => (
  <ContactSectionWrapper>
    <ContactItem className="contact--item-margin">
      <ContactItemIcon src={IconLocation} alt="location pin icon" />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </span>
    </ContactItem>
    <ContactItem className="contact--item-margin">
      <ContactItemIcon src={IconPhone} alt="location pin icon" />
      <span>+1-543-123-4567</span>
    </ContactItem>
    <ContactItem>
      <ContactItemIcon
        className="email-icon"
        src={IconEmail}
        alt="location pin icon"
      />
      <span>example@fylo.com</span>
    </ContactItem>
  </ContactSectionWrapper>
)

export default ContactSection
