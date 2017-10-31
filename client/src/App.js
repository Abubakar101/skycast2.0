import React, { Component } from "react";
import Home from "./components/Home";
import Results from "./components/Results";
import Nav from "./components/partials/Nav";
import Search from "./components/partials/Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSearch: false,
      showSnowMan: true,
      darkskyData: null,
      showResults: false
    };
    this.submitData = this.submitData.bind(this);
  }

  submitData(e) {
    e.preventDefault();
    console.log("Submit DATA", e.target.searchInput.value);
    axios
      .post("http://localhost:3001/", {
        userInput: e.target.searchInput.value
      })
      .then(res => {
        this.setState({
          darkskyData: res.data,
          showResults: true
        });
        console.log("STATE DARK SKY API DATA", this.state.darkskyData);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="mainContainer">
        <Nav showSnowMan={this.state.showSnowMan} />
        {this.state.showSnowMan === true && <Home />}
        {this.state.showSnowMan === false &&
          this.state.showResults === true && (
            <Results data={this.state.darkskyData} />
          )}

        {this.state.showSearch === true && (
          <Search submitData={this.submitData} />
        )}

        <div
          className="addItem"
          onClick={() => {
            this.setState({ showSearch: true, showSnowMan: false });
          }}
        >
          {" "}
          +{" "}
        </div>
      </div>
    );
  }
}

export default App;
