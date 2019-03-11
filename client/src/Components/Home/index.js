import React, { Component } from "react";
import axios from "axios";
import Post from "../Post";

class Home extends Component {
  state = {
    logged: null,
    allPosts: null,
    id: null
  };

  componentDidMount() {
    axios.get("/home").then(res => {
      const resStatus = res.data;
      if (!resStatus.logged) {
        this.setState({ logged: resStatus });
        const { history } = this.props;
        history.push("/login");
      } else {
        this.setState({
          logged: resStatus.logged,
          allPosts: resStatus.allPosts,
          id: resStatus.id
        });
      }
    });
  }
  render() {
    const { allPosts } = this.state;
    const posts = allPosts
      ? allPosts.map(element => (
          <Post
            key={element.id}
            post_id={element.id}
            title={element.title}
            body={element.body}
            id={this.state.id}
          />
        ))
      : "Loading...";

    const home = this.state.logged ? (
      <React.Fragment>{posts}</React.Fragment>
    ) : null;

    return <React.Fragment>{home}</React.Fragment>;
  }
}

export default Home;
