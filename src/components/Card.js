import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, role, info } = this.props;
    return (
      <div className="job job-1">
        <h3>{name}</h3>
        <h6>{role}</h6>
        <p>{info} </p>
      </div>
    );
  }
}
export default Card;
