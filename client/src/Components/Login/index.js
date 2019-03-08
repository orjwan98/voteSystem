import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  title: {
    textAlign: "center"
  },
  span: {
    color: "blue",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

class Login extends Component {
  state = {
    username: "",
    password: "",
    logged: null,
    yesUser: true
  };
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      alert("field cannot be empty!");
    } else {
      axios
        .post("/login", {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          console.log(res);
        });
    }
  };

  goLogin = (history, e) => {
    history.push("/register");
  };
  render() {
    const { classes, history } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.title}>
            Log in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                name="username"
                onChange={this.handleUsername}
                value={this.state.username}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={this.handlePassword}
                value={this.state.password}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Log in
            </Button>
          </form>
        </Paper>
        <Typography variant="subtitle1" className={classes.title}>
          Don't have an account? &nbsp;
          <span
            className={classes.span}
            onClick={() => {
              this.goLogin(history);
            }}
          >
            Register now.
          </span>
        </Typography>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
