import React from "react"
import {
  TestimonialItemWrapper,
  TestimonialItemText,
  TestimonialItemProfile,
  TestimonialItemPicture,
  TestimonialItemInfo,
  TestimonialItemName,
  TestimonialItemJobTitle
} from "./styles"

const TestimonialItem = ({ text, imageSrc, fullName, jobTitle }) => (
  <TestimonialItemWrapper>
    <TestimonialItemText>{text}</TestimonialItemText>
    <TestimonialItemProfile>
      <TestimonialItemPicture>
        <img src={imageSrc} alt="profile portrait of the customer" />
      </TestimonialItemPicture>
      <TestimonialItemInfo>
        <TestimonialItemName>{fullName}</TestimonialItemName>
        <TestimonialItemJobTitle>{jobTitle}</TestimonialItemJobTitle>
      </TestimonialItemInfo>
    </TestimonialItemProfile>
  </TestimonialItemWrapper>
)

export default TestimonialItem
