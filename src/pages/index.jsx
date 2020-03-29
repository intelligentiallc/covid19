import React, { useEffect, useState } from "react"
import PieChart from "../components/PieChart"
import Layout from "../components/Layout"
import Labels from "../components/Labels"
import Card from "../components/Card"
import Table from "../components/Table"
import { getCases, getAllCases } from "../services/cases"
import { CenterDiv } from "../components/Styles"
import { useWindowSize } from "../hooks/useWindowSize"
// COMMENT TODO import { usePosition } from "../hooks/usePosition"
const IndexPage = () => {
  const { mobile } = useWindowSize()
  // COMMENT TODO const { latitude, longitude, timestamp, accuracy, error } = usePosition()
  const [result, setReuslt] = useState({})
  const [all, setAll] = useState([])
  useEffect(() => {
    async function fetchResults() {
      const { data } = await getCases()
      const { data: countries } = await getAllCases()
      setReuslt(data[0])
      setAll(countries)
    }
    fetchResults()
  }, [])

  const onChangeCountry = data => {
    setReuslt(data)
  }
  return (
    <Layout>
      <CenterDiv direction={mobile ? "column" : "row"}>
        <CenterDiv direction={mobile ? "column" : "row"}>
          <PieChart data={result} />
          <div
            style={{
              marginTop: mobile ? "10px" : "auto",
            }}
          >
            <Labels data={result} />
          </div>
        </CenterDiv>
        <Card width={30}>
          <span>should be all total cases</span>
        </Card>
      </CenterDiv>
      <Table data={all} onChangeCountry={onChangeCountry} />
    </Layout>
  )
}

export default IndexPage
