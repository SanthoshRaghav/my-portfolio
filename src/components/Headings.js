import React, { Component } from "react";

class Headings extends Component {
  render() {
    const {
      fname,
      lname,
      designation,
      about,
      me,
      aboutexplain,
      my,
      work,
      workexplain,
      contact
    } = this.props;
    return (
      <React.Fragment>
        <h1 className="lg-heading">
          {fname}
          {about}
          {my}
          {contact}
          <span className="text-secondary">
            {lname}
            {me}
            {work}
          </span>
        </h1>
        <h2 className="sm-heading">
          {designation} {aboutexplain} {workexplain}
        </h2>
      </React.Fragment>
    );
  }
}
export default Headings;
