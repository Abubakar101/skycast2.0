import React, { Component } from "react";

class DetailData extends Component {
  constructor(props) {
    super(props);
    // this.DetailData = [];

    this.showResultsData = this.showResultsData.bind(this);
    this.skyIcons = this.skyIcons.bind(this);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ", this.props.darkskyData);
    // this.setState({
    //   DetailData: [this.props.DetailData]
    // });
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

  showResultsData() {
    this.skyIcons();
    return this.props.DetailData.map((results, i) => {
      return (
        <div
          className="resultsBox"
          key={i}
          /* style={this.randomColor()} */
        >
          <div className="resultsHeader">
            <span>{results.name[1].long_name} .</span>
            <span> {results.name[3].short_name} .</span>
            <span> {results.name[4].short_name}</span>
          </div>
          <div className="resultsLeftSide">
            <canvas id={results.data.currently.icon} width="128" height="128" />
          </div>

          <div className="resultsLeftRightSide">
            Today
            <span>{results.data.currently.temperature}&#176;</span>
            <span>
              L {results.data.daily.data[3].apparentTemperatureLow}&#176;{" "}
            </span>
            <span>
              H {results.data.daily.data[3].apparentTemperatureHigh}&#176;
            </span>
            <span>NEXT HOUR {results.data.currently.summary}</span>
          </div>

          <div className="resultsRightTopSide">
            {/* FORCAST WEATHER */}
            <div className="daily">
              {" "}
              MON
              <canvas
                id={results.data.daily.data["5"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["5"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["5"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              TUE
              <canvas
                id={results.data.daily.data["6"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["6"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["6"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              WED
              <canvas
                id={results.data.daily.data["0"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["0"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["0"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              THU
              <canvas
                id={results.data.daily.data["1"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["1"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["1"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              FRI
              <canvas
                id={results.data.daily.data["2"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["2"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["2"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              SAT
              <canvas
                id={results.data.daily.data["3"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["3"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["3"].apparentTemperatureHigh}&#176;
              </span>
            </div>
            <div className="daily">
              {" "}
              SUN
              <canvas
                id={results.data.daily.data["4"].icon}
                width="128"
                height="128"
              />
              <span>
                L {results.data.daily.data["4"].apparentTemperatureLow}&#176;{" "}
              </span>
              <span>
                H {results.data.daily.data["4"].apparentTemperatureHigh}&#176;
              </span>
            </div>
          </div>
          <div className="ResultsRightBottomSide">
            {/* Hours */}
            <div className="hours">
              <span>NOW{results.data.hourly.data["0"].temperature}</span>
              <span>{results.data.hourly.data["1"].temperature}</span>
              <span>{results.data.hourly.data["2"].temperature}</span>
              <span>{results.data.hourly.data["3"].temperature}</span>
              <span>{results.data.hourly.data["4"].temperature}</span>
              <span>{results.data.hourly.data["5"].temperature}</span>
              <span>{results.data.hourly.data["6"].temperature}</span>
              <span>{results.data.hourly.data["7"].temperature}</span>
              <span>{results.data.hourly.data["8"].temperature}</span>
              <span>{results.data.hourly.data["9"].temperature}</span>
              <span>{results.data.hourly.data["10"].temperature}</span>
              <span>{results.data.hourly.data["11"].temperature}</span>
              <span>{results.data.hourly.data["12"].temperature}</span>
            </div>

            <div className="halfDay">
              <span>{results.data.hourly.data["0"].summary}</span>
              <span>{results.data.hourly.data["4"].summary}</span>
              <span>{results.data.hourly.data["11"].summary}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="detailData">{this.showResultsData()}</div>;
  }
}

export default DetailData;
