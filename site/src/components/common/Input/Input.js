import React from "react"
import { InputField } from "./styles"

const Input = ({ placeholder, name, labelText, register, className }) => (
  <InputField
    className={className}
    name={name}
    type={name}
    placeholder={placeholder}
    aria-label={labelText}
    ref={register}
  />
)

export default Input
