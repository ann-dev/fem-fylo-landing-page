import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const HeroWrapper = styled.section`
  padding-top: 24px;
  text-align: center;
`

export const HeroImageWrapper = styled.div`
  margin: auto;
  margin-bottom: 33px;
  width: 304px;
`

export const HeroCurveWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    left: 0;
    position: absolute;
    top: -75px;
    z-index: -2;
  }
`

export const HeroLead = styled.h1`
  font-size: 24px;
  line-height: 36px;
  max-width: 320px;
  margin: auto;
  z-index: 3;
`

export const HeroTextWrapper = styled.div`
  background-color: ${COLORS.background_main};
  height: auto;
  margin-top: -50px;
  padding-top: 65px;
  width: 100%;
  z-index: 1;
  p {
    line-height: 21px;
    margin: auto;
    margin-bottom: 32px;
    width: 300px;
  }
`
