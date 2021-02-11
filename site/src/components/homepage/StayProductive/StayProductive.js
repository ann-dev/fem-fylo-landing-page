import React from "react"

import {
  SP_Wrapper,
  SP_ContentWrapper,
  SP_ImageWrapper,
  SP_TextWrapper,
  SP_Header,
} from "./styles"
import SP_FeaturedImage from "assets/images/illustration-stay-productive.png"
import PageLink from "components/common/PageLink/PageLink"

const StayProductive = () => (
  <SP_Wrapper>
    <SP_ContentWrapper>
      <SP_ImageWrapper>
        <img src={SP_FeaturedImage} alt="" role="presentation" />
      </SP_ImageWrapper>
      <SP_TextWrapper>
        <SP_Header>Stay productive, wherever you are</SP_Header>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <PageLink text="See how Fylo works" />
      </SP_TextWrapper>
    </SP_ContentWrapper>
  </SP_Wrapper>
)

export default StayProductive
