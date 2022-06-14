import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArticles } from '../../../actions';
import { withNewsApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import {
  HomePageSlider
} from '../../../components/home-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';

class HomePageSliderContainer extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <HomePageSlider articles={articles} />
  }
}

const mapStateToProps = ({
  articlesList: { articles, loading, error }
}) => {
  return { articles, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { newsApiService } = ownProps;

  return bindActionCreators({
    fetchArticles: fetchArticles(newsApiService)
  }, dispatch);
};

export default compose(
  withNewsApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePageSliderContainer);
