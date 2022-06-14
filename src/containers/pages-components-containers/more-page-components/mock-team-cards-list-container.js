import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDummyPlayers } from '../../../actions';
import { withDummyApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import {
  MockTeamCardsList
} from '../../../components/more-pages-components';

import { Spinner, ErrorIndicator } from '../../../components/shared-components';


class MockTeamCardsListContainer extends Component {

  componentDidMount() {
    this.props.fetchDummyPlayers();
  }

  render() {
    const { loading, error, visibleItems } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <MockTeamCardsList players={visibleItems} />
  }
};

const mapStateToProps = ({
  playersList: { players, loading, error }
}) => {
  return { players, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { dummyApiService } = ownProps;

  return bindActionCreators({
    fetchDummyPlayers: fetchDummyPlayers(dummyApiService)
  }, dispatch);
};

export default compose(
  withDummyApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MockTeamCardsListContainer);