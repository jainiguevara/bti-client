import React from 'react'

import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import MBTransactionsTable from './MBTransactionsTable'
import CBTransactionsTable from './CBTransactionsTable'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: '100%'
  }
})

const StatusTable = (props) => {
  const { classes, bank } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={1}> 
        <Typography variant="headline">
          Your Transactions Today
        </Typography>
        {
          bank === 'metrobank'
            ? <MBTransactionsTable {...props} /> 
            : bank === 'chinabank' 
              && <CBTransactionsTable {...props} />
        }
      </Paper>
    </div>
  )  
}

export default withStyles(styles)(StatusTable)

