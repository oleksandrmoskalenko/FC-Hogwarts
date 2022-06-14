import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap';

export default class TeamsPageDropDown extends Component {

  dropItems = [
    { name: 'all', label: 'All' },
    { name: 'goalkeepers', label: 'Goalkeepers' },
    { name: 'defenders', label: 'Defenders' },
    { name: 'midfielders', label: 'Midfielders' },
    { name: 'forwards', label: 'Forwards' }
  ]

  render() {

    const { onFilterChange } = this.props;

    const dropItems = this.dropItems.map(({ name, label }) => {
      return (
        <Dropdown.Item
          key={name}
          onClick={() => onFilterChange(name)}
        >{label}</Dropdown.Item>
      )
    })

    return (
      <Dropdown className='d-inline mx-2 teams-page-dropdown'>
        <Dropdown.Toggle id='dropdown-autoclose-true'>
          Filter by position
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {dropItems}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
};