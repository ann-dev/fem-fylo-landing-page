import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const TestimonialsWrapper = styled.section`
  background-color: ${COLORS.background_main};
  padding: 80px 0;
  z-index: 1;
  @media ${DEVICES.laptopL} {
    padding: 70px 120px;
    padding-bottom: 120px;
  }
`

export const TestimonialItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 537px;
  justify-content: space-between;
  @media ${DEVICES.mobileL} {
    height: 720px;
  }
  @media ${DEVICES.laptopM} {
    flex-direction: row;
    height: auto;
    margin: auto;
    max-width: 1200px;
  }
`
