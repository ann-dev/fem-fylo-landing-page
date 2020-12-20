import styled from "styled-components"

export const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 35px;
  .contact--item-margin {
    margin-bottom: 16px;
  }
  .email-icon {
    margin-left: -5px;
    height: 14px;
    width: auto;
  }
`

export const ContactItem = styled.div`
  display: flex;
  span {
    line-height: 24px;
    margin-top: -5px;
    max-width: 280px;
  }
`

export const ContactItemIcon = styled.img`
  height: 100%;
  margin-right: 16px;
  width: 13px;
`
