import styled from "styled-components"

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${props => props.direction};
`
export const BottomDiv = styled.div`
  margin-top: auto;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorText = styled.span`
  color: ${props => (props.color ? props.color : "#000000")};
  font-size: ${props => (props.fontSize ? props.fontSize : "18")}px;
  font-family: Roboto;
`
