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
    margin: "10px",
    width: "30%"
  },
  selected: {
    margin: "10px",
    fontWeight: "bold",
    width: "30%"
  }
});

class Post extends Component {
  state = {
    vote: null,
    id: null,
    post_id: null,
    totalUps: null,
    totalDowns: null
  };

  componentDidMount() {
    const { id, post_id } = this.props;

    this.setState({ id, post_id }, () => {
      axios
        .get("/getUpVotes", {
          params: {
            id: this.state.id,
            post_id: this.state.post_id
          }
        })
        .then(res => {
          this.setState({ totalUps: res.data.totalUpvotes });
        });
      axios
        .get("/getDownVotes", {
          params: {
            id: this.state.id,
            post_id: this.state.post_id
          }
        })
        .then(res => {
          this.setState({ totalDowns: res.data.totalDownvotes });
        });

      axios
        .get("/getPostVotes", {
          params: {
            id: this.state.id
          }
        })
        .then(res => {
          console.log(res);
        });
    });
  }

  handleUp = e => {
    this.setState({ vote: "upvote" }, () => {
      axios
        .post("/vote", {
          id: this.state.id,
          vote: this.state.vote,
          post_id: this.state.post_id
        })
        .then(res => {
          axios
            .get("/getUpVotes", {
              params: {
                id: this.state.id,
                post_id: this.state.post_id
              }
            })
            .then(res => {
              this.setState({ totalUps: res.data.totalUpvotes });
            });
          axios.get("/getDownVotes", {
            params: {
              id: this.state.id,
              post_id: this.state.post_id
            }
          });
        });
    });
  };

  handleDown = e => {
    this.setState({ vote: "downvote" }, () => {
      axios
        .post("/vote", {
          id: this.state.id,
          vote: this.state.vote,
          post_id: this.state.post_id
        })
        .then(res => {
          axios
            .get("/getUpVotes", {
              params: {
                id: this.state.id,
                post_id: this.state.post_id
              }
            })
            .then(res => {
              this.setState({ totalUps: res.data.totalUpvotes });
            });
          axios.get("/getDownVotes", {
            params: {
              id: this.state.id,
              post_id: this.state.post_id
            }
          });
        });
    });
  };
  render() {
    const { classes, key, title, body } = this.props;
    const upvote =
      this.state.vote === "upvote" ? (
        <Button
          color="primary"
          className={classes.selected}
          onClick={this.handleUp}
        >
          upvoted &nbsp;
          {this.state.totalUps}
        </Button>
      ) : (
        <Button
          color="primary"
          className={classes.button}
          onClick={this.handleUp}
        >
          upvote &nbsp;
          {this.state.totalUps}
        </Button>
      );

    const downvote =
      this.state.vote === "downvote" ? (
        <Button
          color="primary"
          className={classes.selected}
          onClick={this.handleDown}
        >
          downvoted &nbsp;
          {parseInt(this.state.totalDowns) + 1}
        </Button>
      ) : (
        <Button
          color="primary"
          className={classes.button}
          onClick={this.handleDown}
        >
          downvote &nbsp;
          {this.state.totalDowns}
        </Button>
      );

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary className={classes.title}>
            <Typography className={classes.heading}>{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{body}</Typography>
          </ExpansionPanelDetails>
          {upvote}
          {downvote}
        </ExpansionPanel>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
