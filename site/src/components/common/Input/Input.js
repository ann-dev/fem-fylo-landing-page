import React from "react"
import { InputField } from "./styles"

const Input = ({ placeholder, name }) => <InputField name={name} type={name} placeholder={placeholder} />

export default Input
