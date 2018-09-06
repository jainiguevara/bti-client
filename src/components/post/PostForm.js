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
    this.state = {
      ...JSON.parse(localStorage.getItem('user'))
    }
    localStorage.removeItem('data')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props.route)
    request({
      url: this.props.route,
      body: {
        data: localStorage.getItem('data'),
        userId : this.state._id
      },
      token: this.state.tokens[0].token
    }).then((res, error) => {
      console.log(res);
      localStorage.removeItem('data')
    }).catch(e => {
      console.log(e)
      localStorage.removeItem('data')
    })
 }

  handleFile = e => {
    e.preventDefault()
    const fr = new FileReader()
    fr.onloadend = () => {
      localStorage.setItem('data', fr.result)
    }
    fr.readAsText(e.target.files[0])
  }

  handleDownload = e => {
  }

  render() {
    const { classes, template } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="body1">
          Download the template below, fill-out the details. -- Make sure that the data are correct! :) Then click upload. That's it!
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