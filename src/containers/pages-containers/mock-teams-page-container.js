import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MockTeamsPage } from '../../components/pages';

class MockTeamsPageContainer extends Component {

  state = {
    term: '',
    filter: 'all'
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.nickname
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'goalkeepers':
        return items.filter((item) => {
          return item.position === 'GK'
        });
      case 'defenders':
        return items.filter((item) => {
          return item.position === 'LB' ||
            item.position === 'CB' ||
            item.position === 'RB';
        });
      case 'midfielders':
        return items.filter((item) => {
          return item.position === 'CM'
        });
      case 'forwards':
        return items.filter((item) => {
          return item.position === 'LW' ||
            item.position === 'ST' ||
            item.position === 'RW';
        });
      default:
        return items;
    }
  }

  componentDidUpdate() {
    console.log(this.search(this.props.players, this.state.term))
  }

  render() {

    const { term, filter } = this.state;
    const { players } = this.props;

    const visibleItems = this.filter(
      this.search(players, term),
      filter
    );

    return <MockTeamsPage
      visibleItems={visibleItems}
      onSearchChange={this.onSearchChange}
      onFilterChange={this.onFilterChange} />
  }
}

const mapStateToProps = ({ playersList: { players } }) => {
  return { players };
};


export default connect(mapStateToProps)(MockTeamsPageContainer);
