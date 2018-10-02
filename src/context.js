import React, { Component } from "react";
const Context = React.createContext();
export class Provider extends Component {
  state = {
    details: [
      {
        id: 1,
        fname: "Santhosh ",
        lname: "Raghav",
        designation: "Web Developer",
        about: "About",
        me: " Me",
        aboutexplain: "Let me tell a few things...",
        my: "My ",
        work: "Work",
        workexplain: "Check out some of my projects...",
        contact: "Contact"
      }
    ],
    companieslist: [
      {
        id: 1,
        name: "LetmeFind E-services",
        role: "Front-end developer",
        info:
          "I was in the team that was responsible to design robust, reliable dynamic and multi-browser compatible responsive web pages using Bootstrap, php, Mysql and JavaScript. Involved with the client in architeching the application according to their requirements."
      },
      {
        id: 2,
        name: "Aegis (Lenovo)",
        role: "Front-end developer",
        info:
          "I was responsible for designing and implementing web pages, SPAs with developers, as per the requirement given by the merchandising managers. Developed and maintained sensitive parts of E-commerce website, including high revenue generated pages. Deploying pages as per the Promo Deals schedule, monitoring their performance and maintaining them in production."
      }
    ],
    works: [
      {
        id: 1,
        image: require("./img/projects/project1.jpg"),
        name: "Lenovo E-commerce US and Canada",
        country_one: "Lenovo US",
        country_two: "Lenovo CA",
        url_one: "https://www.lenovo.com/us/en/",
        url_two: "https://www.lenovo.com/ca/en/",
        fafa: "fas fa-link"
      },
      {
        id: 2,
        image: require("./img/projects/project6.jpg"),
        name: "Contact Manager React Context API ",
        project: "Project",
        github: "Github",
        url_one: "https://santhoshraghav.github.io/manager/",
        url_two: "https://github.com/SanthoshRaghav/manager"
      },
      {
        id: 3,
        image: require("./img/projects/project6.jpg"),
        name: "Contact Manager with React Redux (upcoming) ",
        project: "Project",
        github: "Github"
      },
      {
        id: 4,
        image: require("./img/projects/project4.jpg"),
        name: "My Portfolio with React Context API ",
        project: "Project",
        github: "Github",
        url_one: "https://santhoshraghav.github.io/portfolio/",
        url_two: "https://github.com/SanthoshRaghav/portfolio"
      }
    ],
    contact: [
      {
        id: 1,
        name: "Email:",
        email: " raghav.frontend@gmail.com"
      },
      {
        id: 2,
        mobile: "Phone:",
        phone: " +91 9108987216"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
