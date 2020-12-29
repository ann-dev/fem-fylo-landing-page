import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"
import { DEVICES } from "src/constants/DEVICES"

const Button = styled.button`
  background-color: ${COLORS.accent_blue};
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.accent_cyan},
    ${COLORS.accent_blue}
  );
  border: none;
  border-radius: 24px;
  color: ${COLORS.font_main};
  flex-shrink: 0;
  font-family: "Raleway-Bold";
  font-size: 14px;
  font-weight: bold;
  height: 48px;
  width: 240px;
  &:hover {
    background-color: ${COLORS.accent_cyan};
    background-image: none;
    cursor: pointer;
  }
  @media ${DEVICES.laptopM} {
    border-radius: 28px;
    font-size: 16px;
    height: 56px;
    width: 280px;
  }
`

export default Button
