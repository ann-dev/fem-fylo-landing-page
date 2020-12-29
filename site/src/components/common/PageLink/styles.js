import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const PageLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 130px;
  &:hover {
    cursor: pointer;
    span {
      text-shadow: 0 0 1px ${COLORS.accent_cyan}, 0 0 1px ${COLORS.accent_cyan};
    }
  }
  @media ${DEVICES.laptopM} {
    width: 168px;
  }
  img {
    margin-left: 5px;
    margin-top: 2px;
    width: 12px;
    @media ${DEVICES.laptopM} {
      margin-left: 8px;
      width: 14px;
    }
  }
`

export const PageLinkText = styled.span`
  color: ${COLORS.accent_cyan};
  font-size: 12px;
  transition: all 0.3s ease-in;
  @media ${DEVICES.laptopM} {
    font-size: 16px;
  }
`

export const PageLinkUnderline = styled.div`
  background-color: ${COLORS.accent_cyan};
  bottom: -5px;
  height: 1px;
  position: absolute;
  width: 100%;
`
