import React from "react"

import ArrowIcon from "assets/images/icon-arrow.svg"
import { PageLinkWrapper, PageLinkText, PageLinkUnderline } from "./styles"

const PageLink = ({ text }) => (
  <PageLinkWrapper>
    <PageLinkText>{text}</PageLinkText>
    <img src={ArrowIcon} alt="" role="presentation" />
    <PageLinkUnderline className="underline" />
  </PageLinkWrapper>
)

export default PageLink
