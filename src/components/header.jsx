import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  useScrollTrigger,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import { APP_TITLE } from "../constants/variables"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}))

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const Header = props => {
  const classes = useStyles()
  return (
    <div className={classes.grow}>
      <ElevationScroll {...props}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              className={classes.menuButton}
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {APP_TITLE}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Header
