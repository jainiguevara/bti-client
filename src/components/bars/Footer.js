import React from 'react'
import { compose } from 'redux'
// import { translate } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// import FilmArrayLogo from '../../images/film-array.png'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
  },
  legal: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    height: 50,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  links: {
    textDecoration: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

function Footer (props) {
  const { classes, t } = props
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          Toolbar
        </Toolbar>
      </AppBar>
      <AppBar color="primary" position="static">
        <Typography className={classes.legal} variant="body1" color="inherit" >
          Footer
        </Typography>
      </AppBar>
    </div>
  )
}

export default compose(
  withStyles(styles), 
  // translate()
)(Footer)
