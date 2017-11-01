import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";

import DetailData from "./components/DetailData";
import Nav from "./components/partials/Nav";
import Search from "./components/partials/Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSearch: true,
      showSnowMan: false,
      darkskyData: [],
      showResults: false,
      showDetailData: false,
      count: 0,
      DetailData: null
    };
    this.submitData = this.submitData.bind(this);
    this.showResultsComponent = this.showResultsComponent.bind(this);
    this.showDetailDataComponent = this.showDetailDataComponent.bind(this);
    this.showDetailDataState = this.showDetailDataState.bind(this);
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
          darkskyData: this.state.darkskyData.concat([res.data]),
          showResults: true,
          count: this.state.count + 1
        });
        console.log("STATE DARK SKY API DATA", this.state.darkskyData);
      })
      .catch(err => console.log(err));
  }

  showResultsComponent() {
    console.log(this.state.darkskyData, "showresultscompo");
    if (this.state.showSnowMan === false && this.state.showResults === true) {
      return (
        <Results
          darkskyData={this.state.darkskyData}
          count={this.state.count}
          showDetailDataState={this.showDetailDataState}
          changeState={this.changeState}
        />
      );
    }
  }

  showDetailDataState(value) {
    this.setState({
      DetailData: value,
      showDetailData: true,
      showResults: false
    });
  }

  showDetailDataComponent() {
    if (this.state.showDetailData) {
      return <DetailData DetailData={this.state.DetailData} />;
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <Nav showSnowMan={this.state.showSnowMan} />
        {this.state.showSnowMan === true && <Home />}

        {this.showResultsComponent()}
        {this.state.showDetailData && this.showDetailDataComponent()}

        {this.state.showSearch === true && (
          <Search submitData={this.submitData} />
        )}
        {
          // <div
          //   className="addItem"
          //   onClick={() => {
          //     this.setState({ showSearch: true, showSnowMan: false });
          //   }}
          // >
          //   {" "}
          //   +{" "}
          // </div>
        }
      </div>
    );
  }
}

export default App;
