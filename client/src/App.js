import React, { Component } from "react";
import Home from "./components/Home";
import Nav from "./components/partials/Nav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSearch: false,
      showSnowMan: true
    };
    // this.showSearch = this.showSearch.bind(this);
  }
  render() {
    return (
      <div className="mainContainer">
        <Nav showSnowMan={this.state.showSnowMan}/>
        {(this.state.showSnowMan === true) && <Home />}

        <div className="addItem" onClick={() => {this.setState({ showSearch: true, showSnowMan: false });}}
        > + </div>
      </div>
    );
  }
}

export default App;
