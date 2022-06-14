import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomePageScrollBar } from '../../../components/home-page-components';
import { fetchFixturesPhotos } from '../../../actions';
import { withFixturesPhotosApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import { Spinner, ErrorIndicator } from '../../../components/shared-components';

class HomePageScrollBarContainer extends Component {

  componentDidMount() {
    this.props.fetchFixturesPhotos();
  }

  render() {
    const { fixturesPhotos, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <HomePageScrollBar fixturesPhotos={fixturesPhotos} />
  }
}

const mapStateToProps = ({
  fixturesPhotosList: { fixturesPhotos, loading, error }
}) => {
  return { fixturesPhotos, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { fixturesPhotosApiService } = ownProps;

  return bindActionCreators({
    fetchFixturesPhotos: fetchFixturesPhotos(fixturesPhotosApiService)
  }, dispatch);
};

export default compose(
  withFixturesPhotosApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePageScrollBarContainer);
