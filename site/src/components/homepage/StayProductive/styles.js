import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const SP_Wrapper = styled.div`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 80px 0;
  @media ${DEVICES.laptopM} {
    padding: 105px;
  }
`

export const SP_ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media ${DEVICES.laptopM} {
    flex-direction: row;
    justify-content: center;
    max-width: 1300px;
  }
`

export const SP_ImageWrapper = styled.div`
  height: auto;
  margin: auto;
  width: 300px;
  @media ${DEVICES.mobileL} {
    width: 60vw;
  }
  @media ${DEVICES.laptopM} {
    min-width: 615px;
    margin-right: 57px;
  }
`

export const SP_TextWrapper = styled.div`
  margin: auto;
  margin-top: 48px;
  width: 320px;
  @media ${DEVICES.mobileL} {
    margin-top: 32px;
    width: 60vw;
  }
  p {
    margin-bottom: 16px;
    @media ${DEVICES.laptopM} {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 24px;
    }
  }
`

export const SP_Header = styled.span`
  display: block;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 18px;
  margin-bottom: 16px;
  @media ${DEVICES.laptopM} {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 18px;
    margin-top: 52px;
    max-width: 400px;
  }
`
