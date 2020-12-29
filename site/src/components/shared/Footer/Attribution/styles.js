import styled from "styled-components"
import { DEVICES } from "src/constants/DEVICES"

export const AttributionWrapper = styled.div`
  @media ${DEVICES.mobileL} {
    margin-top: 13px;
  }
`

export const AttributionItem = styled.span`
  display: block;
  font-family: "Raleway-Bold";
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  @media ${DEVICES.mobileL} {
    text-align: left;
  }
  a {
    transition: text-shadow 0.3s ease-in;
    &:hover {
      cursor: pointer;
      text-shadow: 0 0 0.5px white, 0 0 0.5px white;
    }
  }
`
