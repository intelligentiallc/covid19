import React from "react"
import styled from "styled-components"
import { GRAY } from "../../constants/style"
export const CardDiv = styled.div`
         display: flex;
         justify-content: center;
         align-items: center;
         width: ${props => props.width}%;
         background-color: ${GRAY};
         border-radius: 4px;
       `
const Card = ({ width = "100", children }) => {
  return <CardDiv width={width}>{children}</CardDiv>
}

export default Card
