import React from "react"
import DataTable from "react-data-table-component"
import { columns } from "./Columns"

const customStyles = {
  rows: {
    style: {
      cursor: "pointer", // override the row height
    },
  },
}
const Table = ({ data, onChangeCountry = () => {} }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      striped
      highlightOnHover
      responsive
      onRowClicked={onChangeCountry}
      dense
      persistTableHead
      defaultSortField="confirmed"
      defaultSortAsc={false}
      customStyles={customStyles}
    />
  )
}

export default Table
