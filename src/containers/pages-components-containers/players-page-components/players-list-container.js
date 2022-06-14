import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withHpApiService } from '../../../components/hoc';
import { fetchPlayers } from '../../../actions';
import { compose } from '../../../utils';

import {
  PlayersList
} from '../../../components/players-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';

class PlayersListContainer extends Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players, loading, error, onItemSelected } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <PlayersList
      players={players}
      onItemSelected={onItemSelected}
    />
  }
}

const mapStateToProps = ({
  playersList: { players, loading, error }
}) => {
  return { players, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const { hpApiService } = ownProps;

  return bindActionCreators({
    fetchPlayers: fetchPlayers(hpApiService)
  }, dispatch);
}

export default compose(
  withHpApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PlayersListContainer);
