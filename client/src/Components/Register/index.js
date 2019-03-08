import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
  }
});

class Register extends Component {
  state = {
    username: "",
    password: "",
    registered: null,
    signedUp: null
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
        .post("/register", {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          const resStatus = res.data;
          if (resStatus.registered) {
            this.setState({
              registered: resStatus.registered
            });
          } else if (resStatus.signedUp) {
            this.setState({ signedUp: resStatus.signedUp });
          } else {
            console.log(res.data);
          }
        });
    }
  };

  goLogin = (history, e) => {
    history.push("/login");
  };
  render() {
    const { classes, history } = this.props;

    const registered = this.state.registered ? (
      <Typography variant="subtitle1">
        username already exists.<br />
        <a
          onClick={() => {
            this.goLogin(history);
          }}
          href="#"
        >
          Login instead
        </a>
      </Typography>
    ) : null;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography
            component="subtitle"
            variant="h5"
            className={classes.title}
          >
            Register
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
              Register
            </Button>
          </form>
        </Paper>
        {registered}
      </main>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
