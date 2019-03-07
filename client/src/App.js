import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Register from "./Components/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/register" render={props => <Register {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
