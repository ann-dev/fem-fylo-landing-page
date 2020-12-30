import React from "react"

import Button from "components/common/Button/Button"
import Input from "components/common/Input/Input"
import {
  EarlyAccessWrapper,
  EarlyAccessCTA,
  EarlyAccessBgFiller,
  EarlyAccessCTAHeader,
  EarlyAccessCTAText,
  EarlyAccessInputWrapper,
} from "./styles"

const EarlyAccess = () => (
  <EarlyAccessWrapper id="early-access">
    <EarlyAccessCTA>
      <EarlyAccessCTAHeader>Get early access today</EarlyAccessCTAHeader>
      <EarlyAccessCTAText>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </EarlyAccessCTAText>
      <EarlyAccessInputWrapper>
        <Input placeholder="email@example.com" name="email" labelText="email" />
        <Button>Get Started For Free</Button>
      </EarlyAccessInputWrapper>
    </EarlyAccessCTA>
    <EarlyAccessBgFiller />
  </EarlyAccessWrapper>
)

export default EarlyAccess
