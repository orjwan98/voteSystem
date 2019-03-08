import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
