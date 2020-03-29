import React from "react"
import DataTable from "react-data-table-component"
import { columns } from "./Columns"
import Loader from "../Loader"
const customStyles = {
  rows: {
    style: {
      cursor: "pointer",
    },
  },
}
const Table = ({ data = [], onChangeCountry }) => {
  return (
    <>
      {" "}
      {data.length > 0 ? (
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
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Table
