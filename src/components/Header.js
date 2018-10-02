import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
class Header extends Component {
  state = {
    showMenu: false
  };
  onClickMenu = e => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu
    });
    console.log(e.target.innerText);
  };
  render() {
    const { showMenu } = this.state;
    const close = classnames({
      " close": showMenu
    });
    const show = classnames({
      " show": showMenu
    });
    return (
      <header>
        <div className={"menu-btn" + close} onClick={this.onClickMenu}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={"menu" + show}>
          <div className={"menu-branding" + show}>
            <div className="portrait" />
          </div>
          <ul className={"menu-nav" + show}>
            <li
              className={"nav-item current" + show}
              onClick={this.onClickMenu}
            >
              <NavLink to="/" className="nav-link" exact>
                Home
              </NavLink>
            </li>
            <li className={"nav-item" + show} onClick={this.onClickMenu}>
              <NavLink to="/about" className="nav-link" exact>
                About Me
              </NavLink>
            </li>
            <li className={"nav-item" + show} onClick={this.onClickMenu}>
              <NavLink to="/work" className="nav-link" exact>
                My Work
              </NavLink>
            </li>
            <li className={"nav-item" + show} onClick={this.onClickMenu}>
              <NavLink to="/contact" className="nav-link" exact>
                How To Reach Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
