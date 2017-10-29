import React, { Component } from "react";

class search extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: "",
      searchResultsArr: [
        "Result Go Here One",
        "Result Go Here Second",
        "Result Go Here Third",
        "Result Go Here Fourth"
      ]
    };

    // this.checkClickTarget = this.checkClickTarget.bind(this);
  }

  //   checkClickTarget(e) {
  //     if (e.target.className === "searchLayer") {
  //       this.props.changeState("showSearch", false);
  //       this.props.changeState("showSnowMan", true);
  //     }
  //   }
  // onClick={e => {
  //   this.checkClickTarget(e);
  // }}

  render() {
    return (
      <div className="searchLayer">
        <div className="searchContainer">{this.state.searchInputValue}</div>

        <div className="searchBar"><i class="fa fa-search fa-lg" aria-hidden="true"></i>
          <input type="text" placeholder="Where are you?" className="searchInput" name="searchInput" />
        </div>

        <div className="searchResults">
          <ul>
            {this.state.searchResultsArr.map(list => { 
                return <li>{list}</li>; })}
          </ul>
        </div>
        <div className="searchBottom"></div>
      </div>
    );
  }
}

export default search;
