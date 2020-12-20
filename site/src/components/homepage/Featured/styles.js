import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

export const FeaturedWrapper = styled.section`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 120px 0 80px;
`

export const FeaturedGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 320px;

  .featuredItem {
    text-align: center;
    img {
      height: 65px;
      margin-bottom: 30px;
      width: auto;
    }
    span {
      display: block;
      font-family: "Raleway-Bold", sans-serif;
      font-size: 18px;
      margin-bottom: 8px;
    }
    p {
      line-height: 21px;
    }
  }

  .marginBottom {
    margin-bottom: 80px;
  }
`
