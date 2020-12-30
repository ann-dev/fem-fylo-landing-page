import React from "react"
import { useForm } from "react-hook-form"

import Button from "components/common/Button/Button"
import Input from "components/common/Input/Input"
import {
  EarlyAccessWrapper,
  EarlyAccessCTA,
  EarlyAccessBgFiller,
  EarlyAccessCTAHeader,
  EarlyAccessCTAText,
  EarlyAccessForm,
} from "./styles"

const EarlyAccess = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    alert("Thank you for submitting!")
    console.log(data)
  }

  return (
    <EarlyAccessWrapper id="early-access">
      <EarlyAccessCTA>
        <EarlyAccessCTAHeader>Get early access today</EarlyAccessCTAHeader>
        <EarlyAccessCTAText>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </EarlyAccessCTAText>
        <EarlyAccessForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={errors.email ? "input-error" : ""}
            placeholder={errors.email ? "" : "email@example.com"}
            name="email"
            labelText="email"
            register={register({
              required: true,
              pattern: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-error">Email cannot be empty</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-error">Enter a valid email address</span>
          )}
          <Button type="submit">Get Started For Free</Button>
        </EarlyAccessForm>
      </EarlyAccessCTA>
      <EarlyAccessBgFiller />
    </EarlyAccessWrapper>
  )
}

export default EarlyAccess
