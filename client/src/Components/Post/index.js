import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const styles = theme => ({
  root: {
    margin: "auto",
    width: "50%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "white"
  },

  expand: {
    fontSize: theme.typography.pxToRem(12),
    color: "white"
  },

  title: {
    backgroundColor: "blue"
  },
  imgcontainer: {
    display: "inline-block"
  },
  button: {
    margin: "10px"
  }
});

class Post extends Component {
  state = {
    upvote: "upvote",
    downvote: "downvote"
  };

  handleUp = e => {
    axios.post("/up", { type: "upvote" }).then(res => {
      console.log(res);
    });
  };

  render() {
    const { classes, key, title, body } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary className={classes.title}>
            <Typography className={classes.heading}>{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{body}</Typography>
          </ExpansionPanelDetails>
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleUp}
          >
            {this.state.upvote}
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleDown}
          >
            {this.state.downvote}
          </Button>
        </ExpansionPanel>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
