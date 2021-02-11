import React from "react"

import IconLocation from "assets/images/icon-location.svg"
import IconPhone from "assets/images/icon-phone.svg"
import IconEmail from "assets/images/icon-email.svg"
import {
  ContactSectionWrapper,
  ContactItemsWrapper,
  ContactItem,
  ContactItemIcon,
} from "./styles"

const ContactSection = () => (
  <ContactSectionWrapper>
    <ContactItem className="contact--item-margin">
      <ContactItemIcon
        className="location-icon"
        src={IconLocation}
        alt=""
        role="presentation"
      />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </span>
    </ContactItem>
    <ContactItemsWrapper>
      <ContactItem className="contact--item-margin">
        <ContactItemIcon
          className="phone-icon"
          src={IconPhone}
          alt=""
          role="presentation"
        />
        <span>+1-543-123-4567</span>
      </ContactItem>
      <ContactItem>
        <ContactItemIcon
          className="email-icon"
          src={IconEmail}
          alt=""
          role="presentation"
        />
        <span>example@fylo.com</span>
      </ContactItem>
    </ContactItemsWrapper>
  </ContactSectionWrapper>
)

export default ContactSection
