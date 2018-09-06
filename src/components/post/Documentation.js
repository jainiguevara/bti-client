import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingBottom: 10
  },
  button: {
    marginTop: 10,
    marginRight: 8 
  }
})

const Documentation = () => (
  <div>
    <Paper elevation={1}> 
      <Typography variant="headline">
        DOCUMENTATION
      </Typography>  
    </Paper>
  </div>
)

export default withStyles(styles)(Documentation)