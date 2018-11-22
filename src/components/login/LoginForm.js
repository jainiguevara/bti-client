import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import compose from 'lodash/fp/compose'
import { Button, FormControl, TextField, Input, InputLabel, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

import { submitLogin } from './../../actions/user'
import history from'./../../history'

// const store = configureStore()

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: 200
  },
})

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    if (props.user) {
      history.push('/')
    }
  }

  handleSubmit = e => {
    const { submitLogin } = this.props
    submitLogin({
        email: this.state.email,
        password: this.state.password
    })
    // history.push('/dashboard')
  }

  handleEmailChange = e => {
    const email = e.target.value
    this.setState({
      email
    });
  };

  handlePasswordChange = e => {
    const password = e.target.value
    this.setState({
      password,
    });
  }

  handleMouseDownPassword = e => {
    e.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props
    return (
      <div className={classNames(classes.appFrame)}>
          <TextField
            id="email"
            label="Email"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.email}
            onChange={this.handleEmailChange}
            margin="normal"
            autoFocus
          /> 
          <FormControl className={classNames(classes.margin, classes.textField)}>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button 
            component={Link}
            to="/dashboard"
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={this.handleSubmit}
          >
            Login
          </Button>
      </div>
    )
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    user : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLogin: payload => {
      dispatch(submitLogin(payload))
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginForm)