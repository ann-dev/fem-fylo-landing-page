import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.background_footer};
  padding: 80px 24px 52px;
`

export const FooterLogo = styled.img`
  margin-left: 11px;
  width: 108px;
`

export const FooterList = styled.ul`
  margin-top: 48px;
  li {
    font-size: 16px;
  }
  .item-margin {
    margin-bottom: 16px;
  }
`

export const SocialsSection = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin: auto;
  margin-top: 56px;
  width: 104px;
`

export const SocialsLogo = styled.img`
  height: auto;
  width: 28px;
`
