import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const TestimonialItemWrapper = styled.div`
  background-color: ${COLORS.background_testimonials};
  border-radius: 3.93px;
  height: 160px;
  margin: auto;
  padding: 24px 20px;
  position: relative;
  width: 280px;
  .icon-quotes {
    left: -20px;
    position: absolute;
    top: -20px;
  }
  @media ${DEVICES.mobileL} {
    height: 200px;
    padding: 40px 28px 0;
    width: 360px;
  }
`

export const TestimonialItemText = styled.p`
  font-size: 10px;
  line-height: 18px;
  @media ${DEVICES.mobileL} {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 24px;
  }
`

export const TestimonialItemProfile = styled.div`
  align-items: center;
  display: flex;
  margin-top: 17px;
`

export const TestimonialItemPicture = styled.div`
  height: 24px;
  margin-right: 8px;
  width: 24px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`

export const TestimonialItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 26px;
  justify-content: space-between;
`

export const TestimonialItemName = styled.span`
  display: block;
  font-family: "OpenSans-Bold";
  font-size: 10px;
`

export const TestimonialItemJobTitle = styled.span`
  display: block;
  font-size: 7px;
  margin: 0;
  @media ${DEVICES.laptopM} {
    font-size: 8px;
  }
`
