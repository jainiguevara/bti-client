import React from "react";
import compose from "lodash/fp/compose";
import { withStyles } from "@material-ui/core/styles";

// import connect from "../components/login/connect";
import Background from "./../images/bg.jpg";
import LoginForm from "./../components/login/LoginForm";
import LoginFormHooked from "./../components/login/LoginFormHooked";
import LoginHeader from "./../components/login/LoginHeader";

const styles = () => ({
  appFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover"
  },
  formFrame: {
    marginTop: '18%',
    paddingLeft: '50%',
    paddingTop: 20,
    backgroundColor: 'white',
    opacity: 0.95,
    height: 130
  }
});

const Login = ({ classes }) => (
  <div className={classes.appFrame}>
    <div className={classes.formFrame}>
      <LoginHeader />
      <LoginForm />
    </div>
  </div>
);

export default compose(
  // connect,
  withStyles(styles)
  // translate(),
)(Login);
