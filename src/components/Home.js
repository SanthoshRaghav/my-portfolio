import React, { Component } from "react";
import Headings from "./Headings";
import { Consumer } from "../context";
class Home extends Component {
  onClickLink = (url, e) => {
    e.preventDefault();
    console.log(url);
    var win = window.open(url, "_blank");
    win.focus();
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { details } = value;
          return (
            <div className="home" id="bg-img">
              <main id="home">
                {details.map(detail => (
                  <Headings
                    key={detail.id}
                    fname={detail.fname}
                    lname={detail.lname}
                    designation={detail.designation}
                  />
                ))}
                <div className="icons">
                  <a href="/">
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                  <a
                    href="/"
                    onClick={this.onClickLink.bind(
                      this,
                      "https://www.linkedin.com/"
                    )}
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  <a
                    href="/"
                    onClick={this.onClickLink.bind(
                      this,
                      "https://github.com/SanthoshRaghav?tab=repositories"
                    )}
                  >
                    <i className="fab fa-github fa-2x" />
                  </a>
                </div>
              </main>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Home;
