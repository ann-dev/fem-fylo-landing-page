import styled from "styled-components"
import { DEVICES } from "src/constants/DEVICES"

export const NotFoundWrapper = styled.section`
  display: flex;
  min-height: 55vh;
  padding: 50px 24px;
  article {
    text-align: center;
    @media ${DEVICES.laptop} {
      text-align: left;
    }
  }
  @media ${DEVICES.laptopM} {
    padding: 0 73px;
  }
`

export const NotFoundContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media ${DEVICES.laptop} {
    flex-direction: row;
    max-width: 1400px;
  }
`

export const NotFoundImage = styled.div`
  height: auto;
  width: 300px;
  @media ${DEVICES.laptop} {
    margin-right: 50px;
    width: 450px;
  }
  @media ${DEVICES.laptopM} {
    max-width: 720px;
    margin-right: 60px;
  }
`

export const NotFoundHeader = styled.span`
  display: block;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 28px;
  @media ${DEVICES.mobileL} {
    font-size: 32px;
  }
  @media ${DEVICES.laptopM} {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 18px;
    margin-top: 52px;
    max-width: 400px;
  }
`

export const NotFoundParagraph = styled.p`
  margin-bottom: 24px;
  max-width: 350px;
`
