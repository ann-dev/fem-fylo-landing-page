import React from "react"
import { AttributionItem, AttributionWrapper } from "./styles"

const Attribution = () => (
  <AttributionWrapper>
    <AttributionItem>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        className="attribution__link"
      >
        Frontend Mentor
      </a>
      .
    </AttributionItem>
    <AttributionItem>
      Coded by{" "}
      <a
        href="https://github.com/ann-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="attribution__link"
      >
        ann-dev
      </a>
      .
    </AttributionItem>
  </AttributionWrapper>
)

export default Attribution
