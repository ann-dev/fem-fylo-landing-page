import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const EarlyAccessWrapper = styled.div`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 80px 0 0;
  position: relative;
  z-index: 1;
`

export const EarlyAccessBgFiller = styled.div`
  background-color: ${COLORS.background_footer};
  bottom: 0;
  height: 180px;
  position: absolute;
  width: 100%;
  z-index: -2;
  @media ${DEVICES.laptopM} {
    height: 115px;
  }
`

export const EarlyAccessCTA = styled.div`
  background-color: ${COLORS.background_intro};
  box-shadow: 0 4px 6px ${COLORS.background_footer};
  border-radius: 9px;
  height: 353px;
  margin: auto;
  min-width: 300px;
  padding: 40px 28px;
  text-align: center;
  width: 336px;
  @media ${DEVICES.mobileL} {
    width: 50vw;
  }
  @media ${DEVICES.laptopM} {
    height: 275px;
    padding: 48px 80px;
    width: 865px;
  }
`

export const EarlyAccessCTAHeader = styled.span`
  font-family: "Raleway-Bold";
  font-size: 18px;
  @media ${DEVICES.laptopM} {
    font-size: 32px;
  }
`

export const EarlyAccessCTAText = styled.p`
  line-height: 21px;
  margin-bottom: 32px;
  margin-top: 16px;
  @media ${DEVICES.laptopM} {
    margin: auto;
    margin-bottom: 38px;
    margin-top: 20px;
    max-width: 650px;
  }
`

export const EarlyAccessForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  input,
  button {
    margin: auto;
  }
  input {
    margin-bottom: 24px;
  }
  .text-error {
    color: ${COLORS.font_error};
    font-family: "OpenSans-Bold";
    font-size: 10px;
    margin-bottom: 10px;
    margin-top: -15px;
    @media ${DEVICES.laptopM} {
      bottom: -10px;
      left: 39px;
      position: absolute;
    }
  }
  @media ${DEVICES.mobileL} {
    input {
      font-size: 12px;
    }
  }
  @media ${DEVICES.laptopM} {
    flex-direction: row;
    justify-content: space-between;
    input {
      width: 480px;
    }
    button {
      font-size: 14px;
      height: 48px;
      margin: 0;
      width: 200px;
    }
  }
`
