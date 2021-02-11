import React from "react"
import { Link } from "gatsby"

import Button from "components/common/Button/Button"
import Image404 from "assets/images/illustration-page-not-found.svg"
import {
  NotFoundWrapper,
  NotFoundContentWrapper,
  NotFoundHeader,
  NotFoundImage,
  NotFoundParagraph,
} from "./styles"

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundContentWrapper>
      <NotFoundImage>
        <img src={Image404} alt="" role="presentation" />
      </NotFoundImage>
      <article>
        <NotFoundHeader>404 Not found. Sorry!</NotFoundHeader>
        <NotFoundParagraph>
          It seems like we haven't found what you've been looking for. Press the
          button below to go back to the homepage.
        </NotFoundParagraph>
        <Link to="/">
          <Button>Go back</Button>
        </Link>
      </article>
    </NotFoundContentWrapper>
  </NotFoundWrapper>
)

export default NotFound
