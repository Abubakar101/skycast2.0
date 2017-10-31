import React, { Component } from "react";

class results extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      apiDataLoaded: false
    };
  }

   componentDidMount() {
    console.log("Results Page", this.props.data);
    this.setState({
      results: [this.props.data],
      apiDataLoaded: true
    });

    let skycons = new window.Skycons({ color: "white", resizeClear: true });
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

  showResultsData() {
    console.log("STATE RESULTS", this.state.results);
    return this.state.results.map((results, i) => {
      console.log("Map function", results);

      return (
        <div className="resultsBox" key={i}>
          <div className="resultsHead">
            <span>{results.name[1].long_name} .</span>
            <span> {results.name[3].short_name} .</span>
            <span> {results.name[4].short_name}</span>
          </div>
          <div className="resultsBody">
          <canvas id={results.data.currently.icon} width="128" height="128"></canvas>
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
        </div>
      );
    });
  }

  render() {
    return (
      <div className="results">
        <span>{this.state.apiDataLoaded ? this.showResultsData() : ""}</span>
      </div>
    );
  }
}

export default results;
