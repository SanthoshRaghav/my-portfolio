import React, { Component } from "react";
import Headings from "./Headings";
import Card from "./Card";
import portrait from "../img/portrait.jpg";
import { Consumer } from "../context";
class About extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { details, companieslist } = value;
          return (
            <main id="about">
              {details.map(detail => (
                <Headings
                  about={detail.about}
                  key={detail.id}
                  me={detail.me}
                  aboutexplain={detail.aboutexplain}
                />
              ))}
              <div className="about-info">
                <img src={portrait} alt="John Doe" className="bio-image" />

                <div className="bio">
                  <h3 className="text-secondary">Bio</h3>
                  <p>
                    Hey, I'm Santhosh Raghav, and I am a front-end JavaScript
                    web developer! My specialities include HTML, CSS, JavaScript
                    and React. I love to learn about how languages work in the
                    background, especially JavaScript and CSS. Usually in my
                    free time I'll either be taking an online course to improve
                    my skills or playing sports, fun projects.
                  </p>
                </div>

                {companieslist.map(company => (
                  <Card
                    key={company.id}
                    name={company.name}
                    role={company.role}
                    info={company.info}
                  />
                ))}
              </div>
            </main>
          );
        }}
      </Consumer>
    );
  }
}
export default About;
