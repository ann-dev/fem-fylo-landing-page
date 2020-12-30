import React from "react"
import { InputField } from "./styles"

const Input = ({ placeholder, name, labelText }) => (
  <InputField
    name={name}
    type={name}
    placeholder={placeholder}
    aria-label={labelText}
  />
)

export default Input
