import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const EarlyAccessWrapper = styled.section`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 80px 0 0;
  position: relative;
  z-index: -2;
  input {
    margin-bottom: 24px;
  }
`

export const EarlyAccessCTA = styled.div`
  background-color: ${COLORS.background_intro};
  box-shadow: 0 4px 6px ${COLORS.background_footer};
  border-radius: 9px;
  height: 353px;
  margin: auto;
  padding: 40px 28px;
  text-align: center;
  width: 336px;
  z-index: 99;
`

export const EarlyAccessBgFiller = styled.div`
  background-color: ${COLORS.background_footer};
  bottom: 0;
  height: 180px;
  position: absolute;
  width: 100%;
  z-index: -1;
`

export const EarlyAccessCTAHeader = styled.span`
  font-family: "Raleway-Bold";
  font-size: 18px;
`

export const EarlyAccessCTAText = styled.p`
  line-height: 21px;
  margin-bottom: 32px;
  margin-top: 16px;
`
