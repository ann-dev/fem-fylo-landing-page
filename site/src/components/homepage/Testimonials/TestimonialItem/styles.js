import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const TestimonialItemWrapper = styled.div`
  background-color: ${COLORS.background_testimonials};
  border-radius: 3.93px;
  height: 160px;
  margin: auto;
  padding: 24px 20px;
  width: 280px;
`

export const TestimonialItemText = styled.p`
  font-size: 10px;
  line-height: 18px;
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
`
