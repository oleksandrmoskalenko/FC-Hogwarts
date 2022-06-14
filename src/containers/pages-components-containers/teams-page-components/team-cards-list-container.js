import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWithRandomErrorPlayers } from '../../../actions';
import { withHpApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import {
  TeamCardsList
} from '../../../components/teams-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';


class TeamCardsListContainer extends Component {

  componentDidMount() {
    this.props.fetchWithRandomErrorPlayers();
  }

  render() {
    const { loading, error, visibleItems } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <TeamCardsList players={visibleItems} />
  }
};

const mapStateToProps = ({
  playersList: { players, loading, error }
}) => {
  return { players, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { hpApiService } = ownProps;

  return bindActionCreators({
    fetchWithRandomErrorPlayers: fetchWithRandomErrorPlayers(hpApiService)
  }, dispatch);
};

export default compose(
  withHpApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TeamCardsListContainer);