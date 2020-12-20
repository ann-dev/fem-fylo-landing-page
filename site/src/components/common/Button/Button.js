import styled from "styled-components"
import { COLORS } from "src/constants/COLORS"

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
`

export default Button
