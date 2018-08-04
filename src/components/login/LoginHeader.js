import React from 'react'
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  }
})

const LoginHeader = (props) => {
  const { classes } = props
  return (
  <div className={classes.root}>
    <Typography variant="title">BTI COURIER EXPRESS INC. - API</Typography>
  </div>  
  )
}

export default withStyles(styles)(LoginHeader)