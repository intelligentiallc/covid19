import React from "react"
import PropTypes from "prop-types";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Header from "./header"
import { PRIMARY } from '../constants/style'
import './layout.css'
const theme = createMuiTheme({
  palette: {
    primary: { main: PRIMARY },
  },
})
const Layout = ({ children }) => {
  return (

    <MuiThemeProvider theme={theme}>
      <Header />
      {children}
    </MuiThemeProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
