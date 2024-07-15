import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            <i class="bi bi-list"></i>
            Catégories
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>Appareils électroniques</DropdownItem>
            <DropdownItem>Ordinateurs</DropdownItem>
            <DropdownItem>Smartphones</DropdownItem>
            <DropdownItem>Tablettes</DropdownItem>
            <DropdownItem header>Electroménager</DropdownItem>
            <DropdownItem>Téléviseurs</DropdownItem>
            <DropdownItem>Pour la cuisine</DropdownItem>
            <DropdownItem>AUtres</DropdownItem>
            </DropdownMenu>


        </Dropdown>
        );
    }
}

export default Example;
