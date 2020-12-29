import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

export const FeaturedWrapper = styled.section`
  background-color: ${COLORS.background_main};
  height: auto;
  padding: 120px 0 80px;
  @media ${DEVICES.laptopM} {
    padding: 15px 0;
  }
`

export const FeaturedGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 320px;
  @media ${DEVICES.mobileL} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 48px 30px;
    grid-template-areas:
      ". ."
      ". .";
    width: 80vw;
  }
  @media ${DEVICES.laptopM} {
    gap: 85px 150px;
    max-width: 880px;
  }

  .featured-item {
    text-align: center;
    @media ${DEVICES.laptopM} {
      height: 215px;
      max-width: 350px;
      margin: 0 auto;
    }
    img {
      height: 65px;
      margin-bottom: 30px;
      width: auto;
      @media ${DEVICES.laptopM} {
        height: auto;
        max-width: 84px;
        margin-bottom: 40px;
      }
    }
    span {
      display: block;
      font-family: "Raleway-Bold", sans-serif;
      font-size: 18px;
      margin-bottom: 8px;
      @media ${DEVICES.laptopM} {
        font-size: 20px;
      }
    }
    p {
      line-height: 21px;
      @media ${DEVICES.laptopM} {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }

  .access-item {
    img {
      @media ${DEVICES.laptopM} {
        margin-bottom: 30px;
      }
    }
  }

  .security-item {
    img {
      @media ${DEVICES.laptopM} {
        margin-bottom: 18px;
      }
    }
  }

  .collab-item {
    img {
      @media ${DEVICES.laptopM} {
        margin-bottom: 30px;
      }
    }
  }

  .margin-bottom {
    margin-bottom: 80px;
    @media ${DEVICES.laptopM} {
      margin-bottom: 0;
    }
  }
`
