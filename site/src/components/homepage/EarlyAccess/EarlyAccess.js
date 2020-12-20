import React from "react"

import Button from "components/common/Button/Button"
import Input from "components/common/Input/Input"
import {
  EarlyAccessWrapper,
  EarlyAccessBgFiller,
  EarlyAccessCTA,
  EarlyAccessCTAHeader,
  EarlyAccessCTAText,
} from "./styles"

const EarlyAccess = () => (
  <EarlyAccessWrapper>
    <EarlyAccessCTA>
      <EarlyAccessCTAHeader>Get early access today</EarlyAccessCTAHeader>
      <EarlyAccessCTAText>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </EarlyAccessCTAText>
      <Input placeholder="email@example.com" name="email"/>
      <Button>Get Started For Free</Button>
    </EarlyAccessCTA>
    <EarlyAccessBgFiller />
  </EarlyAccessWrapper>
)

export default EarlyAccess
