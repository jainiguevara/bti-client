import React from 'react'
import { Button, FormControl, TextField, Input, InputLabel, Paper, IconButton, InputAdornment, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import request from './../../api/request'

const styles = theme => ({
  root: {
    paddingBottom: 10
  },
  button: {
    marginTop: 10,
    marginRight: 8 
  }
})

class MetrobankForm extends React.Component {
  constructor(props) {
    super(props)
    localStorage.setItem('data', null)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { bank, user, postTransactions } = this.props
    const data = localStorage.getItem('data')
    const payload = {
      bank,
      data,
      user
    }
    debugger
    if (data) {
      postTransactions(payload)
    }
 }

  handleFile = e => {
    e.preventDefault()
    const fr = new FileReader()
    fr.onloadend = () => {
      localStorage.setItem('data', fr.result)
    }
    fr.readAsText(e.target.files[0])
  }

  render() {
    const { classes, template } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="body1">
          Download the template below, fill-out the details. -- Make sure that the data are correct! :) Then click upload. That's it!
          <br /><br />
          <em>NOTE: Duplicate Reference No. or Application Number will be skipped in the upload.</em>
        </Typography>
        <FormControl>
          <InputLabel>Upload File</InputLabel>
          <Input
            type="file"
            placeholder="Upload .csv file"
            accept=".csv"
            onChange={this.handleFile} 
          />
        </FormControl>
        <Button 
          className={classes.button}
          variant="contained"
          color="secondary"  
          onClick={this.handleSubmit}
        >
          Upload
        </Button>
        <Button  
          href={template} 
          download={true}
          className={classes.button}
          variant="contained"
        >
          Download Template
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(MetrobankForm)