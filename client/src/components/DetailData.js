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

    return (
      <div className="resultsBox">
        <div className="resultsHeader">
          <span>{this.props.DetailData.name[1].long_name} .</span>
          <span> {this.props.DetailData.name[3].short_name} .</span>
          <span> {this.props.DetailData.name[4].short_name}</span>
        </div>

        <div className="resultsTopDiv">
        <div className="resultsLeftSideDiv">
        <div className="resultsLeftLeftSide">
          <canvas
            id={this.props.DetailData.data.currently.icon}
            width="128"
            height="128"
          />
        </div>

        <div className="resultsLeftRightSide">
          Today
          <span>{this.props.DetailData.data.currently.temperature}&#176;</span>
          <span>
            L {
              this.props.DetailData.data.daily.data[3].apparentTemperatureLow
            }&#176;{" "}
          </span>
          <span>
            H {
              this.props.DetailData.data.daily.data[3].apparentTemperatureHigh
            }&#176;
          </span>
          <span>NEXT HOUR {this.props.DetailData.data.currently.summary}</span>
        </div>
        </div>

        <div className="resultsRightTopSide">
          {/* FORCAST WEATHER */}
          <div className="daily">
            {" "}
            MON
            <canvas
              id={this.props.DetailData.data.daily.data["5"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["5"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["5"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            TUE
            <canvas
              id={this.props.DetailData.data.daily.data["6"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["6"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["6"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            WED
            <canvas
              id={this.props.DetailData.data.daily.data["0"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["0"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["0"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            THU
            <canvas
              id={this.props.DetailData.data.daily.data["1"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["1"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["1"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            FRI
            <canvas
              id={this.props.DetailData.data.daily.data["2"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["2"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["2"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            SAT
            <canvas
              id={this.props.DetailData.data.daily.data["3"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["3"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["3"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
          <div className="daily">
            {" "}
            SUN
            <canvas
              id={this.props.DetailData.data.daily.data["4"].icon}
              width="128"
              height="128"
            />
            <span>
              L{" "}
              {
                this.props.DetailData.data.daily.data["4"]
                  .apparentTemperatureLow
              }&#176;{" "}
            </span>
            <span>
              H{" "}
              {
                this.props.DetailData.data.daily.data["4"]
                  .apparentTemperatureHigh
              }&#176;
            </span>
          </div>
        </div>
        </div>
        <div className="resultsBottomDiv">

          {/* Hours */}
          <div className="hours">
            <span>
              NOW{this.props.DetailData.data.hourly.data["0"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["1"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["2"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["3"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["4"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["5"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["6"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["7"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["8"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["9"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["10"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["11"].temperature}
            </span>
            <span>
              {this.props.DetailData.data.hourly.data["12"].temperature}
            </span>
          </div>

          <div className="halfDay">
            <span>{this.props.DetailData.data.hourly.data["0"].summary}</span>
            <span>{this.props.DetailData.data.hourly.data["4"].summary}</span>
            <span>{this.props.DetailData.data.hourly.data["11"].summary}</span>

        </div>
        </div>
      </div>
    );
  }

  render() {
    return <div className="detailData">{this.showResultsData()}</div>;
  }
}

export default DetailData;