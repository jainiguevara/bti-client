import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import compose from 'lodash/fp/compose'
import { Button, FormControl, TextField, Input, InputLabel, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

import { submitLogin } from './../../actions/user'
import { isLoggedIn } from './../../selectors/user'

// const store = configureStore()



const LoginFormHooked = props => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { classes } = props

  const handleSubmit = e => props.submitLogin({ email, password })
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  return (
    <div className={classNames(classes.appFrame)}>
        <TextField
          id="email"
          label="Email"
          className={classNames(classes.margin, classes.textField)}
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          autoFocus
        /> 
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button 
          variant="contained" 
          color="secondary" 
          className={classes.button}
          onClick={handleSubmit}
        >
          Login
        </Button>
    </div>
  )
}

LoginFormHooked.propTypes = {
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

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: 200
  },
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginFormHooked)