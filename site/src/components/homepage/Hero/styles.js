import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const HeroWrapper = styled.section`
  padding-top: 24px;
  text-align: center;
  @media ${DEVICES.laptopM} {
    padding-bottom: 165px;
  }
`

export const HeroMediaWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const HeroImageWrapper = styled.div`
  margin: auto;
  margin-bottom: 33px;
  width: 304px;
  @media ${DEVICES.mobileL} {
    width: 60vw;
  }
  @media ${DEVICES.laptopM} {
    width: 720px;
  }
`

export const HeroCurveWrapper = styled.div`
  bottom: -100px;
  position: absolute;
  width: 100%;
  z-index: -2;
  @media ${DEVICES.mobileL} {
    bottom: -200px;
  }
  @media ${DEVICES.laptopM} {
    bottom: -565px;
  }
`

export const HeroLead = styled.h1`
  font-size: 24px;
  line-height: 36px;
  max-width: 320px;
  margin: auto;
  z-index: 1;
  @media ${DEVICES.mobileL} {
    font-size: 32px;
    line-height: 48px;
    margin-top: 50px;
    max-width: 75vw;
  }
  @media ${DEVICES.laptopM} {
    font-size: 40px;
    line-height: 60px;
    margin-top: 30px;
    max-width: 750px;
  }
`

export const HeroTextWrapper = styled.div`
  background-color: ${COLORS.background_main};
  display: block;
  height: 165px;
  margin-top: -50px;
  padding-top: 65px;
  width: 100%;
  @media ${DEVICES.mobileL} {
    margin-top: 32px;
    padding-top: 0;
  }
  @media ${DEVICES.laptopM} {
    background-color: transparent;
  }
  p {
    line-height: 21px;
    margin: auto;
    margin-bottom: 32px;
    width: 300px;
    @media ${DEVICES.mobileL} {
      font-size: 16px;
      line-height: 26px;
      width: 65vw;
    }
    @media ${DEVICES.laptopM} {
      font-size: 20px;
      line-height: 30px;
      max-width: 590px;
    }
  }
`
