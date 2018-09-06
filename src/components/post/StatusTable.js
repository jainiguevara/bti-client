import React from 'react'

import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import TransactionsTable from './TransactionsTable'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: '100%'
  }
})

const StatusTable = (props) => {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={1}> 
        <Typography variant="headline">
          Your Transactions Today
        </Typography>
        <TransactionsTable />
      </Paper>
    </div>
  )  
}

export default withStyles(styles)(StatusTable)

