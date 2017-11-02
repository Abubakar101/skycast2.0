import React, { Component } from 'react';

class nav extends Component {
    constructor() {
        super();
        this.navDate = this.navDate.bind(this);
      }
    
      navDate() {
        let date = new Date();
        let days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
        let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        return `${days[date.getDay()]}  -  ${months[date.getMonth()]} ${date.getDate()}`
      }
  render() {
    return (
        <header>
        <i className="fa fa-bars fa-lg colorMenu" aria-hidden="true"></i>
        <span className="navDate ">{!this.props.showSnowMan && this.navDate()}</span>
        </header>
    )
  }
}

export default nav;
