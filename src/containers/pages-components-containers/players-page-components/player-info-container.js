import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withHpApiService } from '../../../components/hoc';
import { fetchPlayers } from '../../../actions';
import { compose } from '../../../utils';

import {
  PlayerInfo
} from '../../../components/players-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';


class PlayerInfoContainer extends Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players, loading, error, id } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <PlayerInfo players={players} id={id} />
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
)(PlayerInfoContainer);
