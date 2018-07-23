import React from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'

import request from './../../api/request'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      res : {}
    }
  }
  componentDidMount() {
    //login
    request({ 
      url: 'user/login',
      body: {
        email: 'jaini.guevara@gmail.com',
        password: 'pass1234'
      }
    }).then(res => {
      this.setState({res})
    })
  }
  render() {
    const { res } = this.state
    return (
      <Grid container spacing={24}>
        <Grid item>
          <Paper>
            Login Component<br/>
            {JSON.stringify(res)}
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default Login