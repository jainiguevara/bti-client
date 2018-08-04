import React from 'react'
import compose from 'lodash/fp/compose'
// import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
// import { translate } from 'react-i18next'

import Background from "./../images/bg.jpg";
import Header from '../components/bars/Header'
import Footer from '../components/bars/Footer'
import Notifications from '../components/notifications/Notifications'

const headerHeight = 64

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover"
    // backgroundColor: theme.palette.secondary.light,
  },
  content: {
    flex: 1,
  },
  body: {
    marginTop: headerHeight,
    marginLeft: 25,
  },
  flex: {
    flex: 1,
  },
  userBadge: {
    borderLeft: '0.01em solid',
    padding: '1em',
    color: 'inherit',
    marginRight: 1,
  },
  hide: {
    display: 'none',
  },
})

const Main = ({
  t, classes, children,
}) =>
  (
      <div className={classes.root}>
        <Header />
        <Grid
          container
          className={classes.content}
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item />
          <Grid style={{marginTop: 80}} item xs={12} sm={11} md={10} lg={10} xl={8}>
            {children}
          </Grid>
        </Grid>
      </div>
  )

const mapState = state => ({})

export default compose(
  // connect(mapState),
  // translate(),
  withStyles(styles),
)(Main)
