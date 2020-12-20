import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const SP_Wrapper = styled.section`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 80px 0;
`

export const SP_ImageWrapper = styled.div`
  height: auto;
  margin: auto;
  width: 300px;
`

export const SP_TextWrapper = styled.div`
  margin: auto;
  margin-top: 48px;
  width: 320px;
  p {
      margin-bottom: 16px;
  }
`

export const SP_Header = styled.span`
  display: block;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 18px;
  margin-bottom: 16px;
`
