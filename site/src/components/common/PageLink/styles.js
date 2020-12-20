import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const PageLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 130px;
  img {
    margin-left: 5px;
    margin-top: 2px;
    width: 12px;
  }
`

export const PageLinkText = styled.span`
  color: ${COLORS.accent_cyan};
  font-size: 12px;
`

export const PageLinkUnderline = styled.div`
  background-color: ${COLORS.accent_cyan};
  bottom: -5px;
  height: 1px;
  position: absolute;
  width: 100%;
`
