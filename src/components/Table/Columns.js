import React from "react"
import { BABYBLUE } from "../../constants/style"

export const columns = [
  {
    name: "Country",
    selector: "countryregion",
    sortable: true,
    cell: row => {
      return <span style={{ fontWeight: "bold" }}>{row.countryregion}</span>
    },
    style: {
      fontFamily: "Roboto",
      color: BABYBLUE,
    },
    width: "120px",
    left: true,
  },
  {
    name: "Total Cases",
    selector: "confirmed",
    sortable: true,
    style: {
      fontFamily: "Roboto",
    },
  },
  {
    name: "Deaths",
    selector: "deaths",
    sortable: true,
    style: {
      fontFamily: "Roboto",
    },
  },
  {
    name: "Recovered",
    selector: "recovered",
    sortable: true,
    style: {
      fontFamily: "Roboto",
    },
  },
]
