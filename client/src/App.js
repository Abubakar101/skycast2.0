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
      showSearch: false,
      showSnowMan: true,
      darkskyData: [],
      showResults: false,
      showDetailData: false,
      count: 0,
      DetailData: null,
      showAddButton: true,
    };
    this.submitData = this.submitData.bind(this);
    this.renderResultsComponent = this.renderResultsComponent.bind(this);
    this.renderDetailDataComponent = this.renderDetailDataComponent.bind(this);
    this.changeState = this.changeState.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.renderShowSnowMan = this.renderShowSnowMan.bind(this);
  }

  submitData(e) {
    console.log("Submit DATA", e);
    axios
      .post("/", {
        userInput: e,
      })
      .then(res => {
        this.setState({
          darkskyData: this.state.darkskyData.concat([res.data]),
          showResults: true,
          count: this.state.count + 1,
        });
        console.log("STATE DARK SKY API DATA", this.state.darkskyData);
      })
      .catch(err => console.log(err));
  }

  renderResultsComponent() {
    console.log(this.state.darkskyData, "showresultscompo");
    if (this.state.showSnowMan === false && this.state.showResults === true) {
      return (
        <Results
          darkskyData={this.state.darkskyData}
          count={this.state.count}
          changeState={this.changeState}
        />
      );
    }
  }

  renderDetailDataComponent() {
    if (this.state.showDetailData) {
      return (
        <DetailData
          DetailData={this.state.DetailData}
          changeState={this.changeState}
        />
      );
    }
  }

  changeState(state, action) {
    this.setState({
      [state]: action,
    });
  }

  renderAddButton() {
    if (this.state.showAddButton) {
      return (
        <div
          className="addItem"
          onClick={() => {
            if (!this.state.showSearch) {
              this.setState({ showSearch: true, showSnowMan: false });
            }
          }}
        >
          {" "}
          +{" "}
        </div>
      );
    }
  }

  renderSearch() {
    if (this.state.showSearch) {
      return (
        <Search
          submitData={this.submitData}
          changeState={this.changeState}
          darkskyDataLength={this.state.darkskyData.length}
        />
      );
    }
  }

  renderShowSnowMan() {
    if (this.state.darkskyData.length === 0 && this.state.showSnowMan) {
      return <Home />;
    }
  }

  render() {
    return (
      <div className="mainContainer">
        {console.log("workinghahaha")}
        <Nav showSnowMan={this.state.showSnowMan} />
        {this.renderShowSnowMan()}
        {this.renderResultsComponent()}
        {this.renderDetailDataComponent()}
        {this.renderSearch()}
        {this.renderAddButton()}
      </div>
    );
  }
}

export default App;
