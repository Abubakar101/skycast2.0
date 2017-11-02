import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

let divStyle = {
  backgroundColor: "red",
};

class results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.randomColor = this.randomColor.bind(this);
    this.skyIcons = this.skyIcons.bind(this);
    this.showResultsName = this.showResultsName.bind(this);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ", this.props.darkskyData);
    this.setState({
      count: this.props.count,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.count !== this.props.count;
  }

  skyIcons() {
    // Skycons icons
    let skycons = new window.Skycons({ color: "white" });
    skycons.add("clear-day", window.Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("clear-night", window.Skycons.CLEAR_NIGHT);
    skycons.add("partly-cloudy-day", window.Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("partly-cloudy-night", window.Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.add("cloudy", window.Skycons.CLOUDY);
    skycons.add("rain", window.Skycons.RAIN);
    skycons.add("sleet", window.Skycons.SLEET);
    skycons.add("snow", window.Skycons.SNOW);
    skycons.add("wind", window.Skycons.WIND);
    skycons.add("fog", window.Skycons.FOG);
    skycons.play();
  }

  // Random colors for Results thumbinal
  randomColor() {
    let colorArr = [
      "#7dcbc4",
      "#536e7b",
      "#8fa4af",
      "white",
      "#19a69a",
      "#36474f",
      "#cfd8dc",
      "#84dbb9",
      "#b048c1",
      "#161f24",
      "#f77f00",
      "#33b8f8",
      "#f7412d",
      "#161f24",
      "#ecd428",
      "#537cd7",
      "#5f78dc",
    ];
    let randomValue = colorArr[Math.floor(Math.random() * colorArr.length)];
    let divStyle = {
      backgroundColor: randomValue,
    };
    return divStyle;
  }

  showResultsName(results) {
    console.log("results.formatted_address: ", results.formatted_address);
    let city = undefined,
      country = undefined,
      state = undefined;
    let formatedAddress = results.formatted_address;
    if (formatedAddress !== undefined) {
      formatedAddress = formatedAddress.split(",");
      // debugger;
      city = formatedAddress[0];
      country = results.name[results.name.length - 1].long_name;

      let hasNumber = /\d/;
      if (hasNumber.test(formatedAddress[1])) {
        if (formatedAddress[1].split(" ")[0] === "") {
          state = formatedAddress[1].split(" ")[1];
          console.log("seonc one");
        } else {
          state = formatedAddress[1].split(" ")[0];
        }
      } else {
        state = formatedAddress[1];
      }
    }
    // debugger;
    return (
      <div className="resultsHead">
        <span className="resultName">{city} </span>
        <div className="circle-divider" />
        <span className="resultName"> {state} </span>
        <div className="circle-divider" />
        <span className="resultName"> {country}</span>
      </div>
    );
  }

  showResultsData() {
    this.skyIcons();
    return this.props.darkskyData.map((results, i) => {
      return (
        <li
          className="resultsBox"
          key={i}
          style={this.randomColor()}
          onClick={() => {
            this.props.changeState("DetailData", results);
            this.props.changeState("showDetailData", true);
            this.props.changeState("showResults", false);
            console.log(this.props.darkskyData);
          }}
        >
          <div className="resultsHead">{this.showResultsName(results)}</div>
          <div className="resultsBody">
            <canvas id={results.data.currently.icon} width="128" height="128" />
            <span>{results.data.currently.temperature}&#176;</span>
          </div>

          <div className="resultsBottom">
            <span>
              L {results.data.daily.data[3].apparentTemperatureLow}&#176;{" "}
            </span>
            <span>
              H {results.data.daily.data[3].apparentTemperatureHigh}&#176;
            </span>
          </div>
        </li>
      );
    });
  }

  render() {
    return <ul className="results">{this.showResultsData()}</ul>;
  }
}

export default results;
