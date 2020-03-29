import React from "react"
import ReactMinimalPieChart from "react-minimal-pie-chart"
import { DEATHS, RECAVERED, CONFIRMED } from "../../constants/style"
const PieChart = ({ data }) => {
  return (
    <ReactMinimalPieChart
      animate
      animationDuration={1500}
      animationEasing="linear"
      cx={50}
      cy={50}
      data={[
        {
          color: DEATHS,
          title: `Deaths (${data.deaths})`,
          value: data.deaths ? data.deaths : 0,
        },
        {
          color: RECAVERED,
          title: `Recovered (${data.recovered})`,
          value: data.recovered ? data.recovered : 0,
        },
        {
          color: CONFIRMED,
          title: `Active cases (${data.confirmed -
            (data.deaths + data.recovered)})`,
          value: data.confirmed
            ? data.confirmed - (data.deaths + data.recovered)
            : 0,
        },
      ]}
      label={false}
      lengthAngle={360}
      lineWidth={100}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      viewBoxSize={[100, 100]}
    />
  )
}

export default PieChart
