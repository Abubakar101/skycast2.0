import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import ReactDOM from "react-dom";
require("jquery-ui/ui/widgets/sortable");

class search extends Component {
  constructor() {
    super();
    this.state = {
      searchResultsArr: [],
    };
    this.checkClickTarget = this.checkClickTarget.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.renderSearchList = this.renderSearchList.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  componentDidMount() {
    this.$node = $(this.refs.sortable);
    this.$node.sortable({
      update: (event, ui) => this.handleOnUpdate(event, ui),
    });
  }

  handleOnUpdate(event, ui) {
    console.log("worinng");

    // this.props.reOrderList(this.getIdsForSort());
  }

  checkClickTarget(e) {
    if (e.target.className === "searchLayer") {
      this.props.changeState("showSearch", false);
      this.props.darkskyDataLength === 0 &&
        this.props.changeState("showSnowMan", true);
    }
  }

  fetchPlaces(e) {
    axios
      .post("/googleplaces/", {
        userInput: e.target.value,
      })
      .then(res => {
        this.setState({
          searchResultsArr: res.data.places,
        });
        // console.log("this NEW ONEEE: ", res);
      })
      .catch(err => console.log(err));
  }

  renderSearchList() {
    if (this.state.searchResultsArr.length !== 0) {
      return this.state.searchResultsArr.storeData.map((list, i) => {
        return (
          <li
            onClick={() => {
              this.props.submitData(list.terms[0].value);
              this.props.changeState("showSearch", false);
            }}
            key={i}
          >
            {list.description}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="searchLayer" onClick={e => this.checkClickTarget(e)}>
        <form
          className="searchBar"
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            this.props.submitData(e.target.searchInput.value);
            this.props.changeState("showSearch", false);
          }}
        >
          <i className="fa fa-search fa-2x" aria-hidden="true" />
          <input
            type="text"
            placeholder="Where are you?"
            className="searchInput"
            name="searchInput"
            onChange={this.fetchPlaces}
            placeholder="Please Enter City or Zipcode"
          />
        </form>
        <div className="searchResults">
          <ul ref="sortable">{this.renderSearchList()}</ul>
        </div>
        <div className="searchBottom" />
      </div>
    );
  }
}

export default search;
