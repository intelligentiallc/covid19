import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, MuiThemeProvider, Box } from "@material-ui/core"
import Header from "../Header"
import { PRIMARY } from "../../constants/style"
import { useWindowSize } from "../../hooks/useWindowSize"

import "./layout.css"
const theme = createMuiTheme({
  palette: {
    primary: { main: PRIMARY },
  },
})
const Layout = ({ children }) => {
  const { mobile } = useWindowSize()

  return (
    <MuiThemeProvider theme={theme}>
      <Header />

      <Box pl={mobile ? 0 : 15} pr={mobile ? 0 : 15}>
        {children}
      </Box>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
