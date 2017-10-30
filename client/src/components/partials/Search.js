import React, { Component } from "react";

class search extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: "",
      searchResultsArr: []
    };

    // this.checkClickTarget = this.checkClickTarget.bind(this);
    console.log("Search array values", this.state.searchResultsArr)
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

        <form className="searchBar" autoComplete="off" onSubmit={e => this.props.submitData(e) & this.setState({searchResultsArr: this.state.searchResultsArr.concat(e.target.searchInput.value)  })}><i className="fa fa-search fa-2x" aria-hidden="true"></i>
          <input type="text" placeholder="Where are you?" className="searchInput" name="searchInput" />
          <button type="submit" style={{display: 'none'}}> </button>
        </form>

        <div className="searchResults">
          <ul>
            {this.state.searchResultsArr.map((list,i) => { 
                return <li key={i}>{list}</li>; })}
          </ul>
        </div>
        <div className="searchBottom"></div>
      </div>
    );
  }
}

export default search;
