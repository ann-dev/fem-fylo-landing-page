import React from "react"

import {
  TestimonialItemWrapper,
  TestimonialItemText,
  TestimonialItemProfile,
  TestimonialItemPicture,
  TestimonialItemInfo,
  TestimonialItemName,
  TestimonialItemJobTitle,
} from "./styles"
import QuoteIcon from "assets/images/bg-quotes.png"

const TestimonialItem = ({ text, imageSrc, fullName, jobTitle, quoteIcon }) => (
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
    {quoteIcon === "true" ? (
      <img src={QuoteIcon} className="icon-quotes" alt="pair of cyan quotes" />
    ) : (
      ""
    )}
  </TestimonialItemWrapper>
)

export default TestimonialItem
