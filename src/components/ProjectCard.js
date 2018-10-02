import React, { Component } from "react";
class ProjectCard extends Component {
  onClickLink = (url, e) => {
    e.preventDefault();
    console.log(url);
    var win = window.open(url, "_blank");
    win.focus();
  };
  render() {
    const {
      image,
      name,
      url_one,
      url_two,
      country_one,
      country_two,
      project,
      github,
      fafa
    } = this.props;

    return (
      <div className="item">
        <h2 className="project-name">{name}</h2>
        <a href="/">
          <img src={image} alt="Project" />
        </a>
        <a
          href="/"
          className="btn-light"
          onClick={this.onClickLink.bind(this, url_one)}
        >
          <i className="fas fa-link " /> {project}
          {country_one}
        </a>
        <a
          href="/"
          className="btn-dark"
          onClick={this.onClickLink.bind(this, url_two)}
        >
          <i className={fafa ? fafa : "fab fa-github"} /> {github}
          {country_two}
        </a>
      </div>
    );
  }
}

export default ProjectCard;
