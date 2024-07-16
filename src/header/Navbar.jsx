import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <div class="btn-category-container">
        <div className="btn-category">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              <i class="bi bi-list"></i>
              Catégories
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Appareils électroniques</DropdownItem>
              <DropdownItem active>Ordinateurs</DropdownItem>
              <DropdownItem>Smartphones</DropdownItem>
              <DropdownItem>Tablettes</DropdownItem>
              <DropdownItem header>Electroménager</DropdownItem>
              <DropdownItem>Téléviseurs</DropdownItem>
              <DropdownItem>Pour la cuisine</DropdownItem>
              <DropdownItem>AUtres</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder={"Search..."}
            className="header-search-input"
          />
          <button className="header-search-input-btn">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <nav className="navbar">
          <ul>
            <li className="active">
              <i class="bi bi-house"></i>
              Home
            </li>
            <li>
              <i class="bi bi-question-octagon"></i>
              About
            </li>
            <li>
              <i class="bi bi-chat-left"></i>
              Contact
            </li>
            <li>
              <i class="bi bi-door-open"></i>
              Register
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Example;
