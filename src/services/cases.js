import axios from "axios"
import { ALLCASES, CASES } from "../constants/endPoints"
export const getCases = async (country = "EG") => {
  const response = await axios({
    method: "get",
    url: CASES + country,
  })
  return response
}

export const getAllCases = async () => {
  const response = await axios({
    method: "get",
    url: ALLCASES,
  })
  return response
}
