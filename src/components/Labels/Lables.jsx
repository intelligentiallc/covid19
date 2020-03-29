import React from "react"
import { RECAVERED, DEATHS, CONFIRMED, BLUE } from "../../constants/style"
import { ColorText, ColumnDiv } from "../../components/Styles"

const Lables = ({ data = {} }) => {
  return (
    <ColumnDiv style={{ alignItems: "end", fontWeight: "bold" }}>
      <ColorText color={BLUE}>Total : {data.confirmed}</ColorText>
      <ColorText color={RECAVERED}>Recovered : {data.recovered}</ColorText>
      <ColorText color={DEATHS}>Death : {data.deaths}</ColorText>
      <ColorText color={CONFIRMED}>
        Active Cases : {data.confirmed - (data.deaths + data.recovered)}
      </ColorText>
    </ColumnDiv>
  )
}

export default Lables
