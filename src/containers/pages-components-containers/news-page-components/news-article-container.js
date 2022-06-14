import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArticles } from '../../../actions';
import { withNewsApiService } from '../../../components/hoc';
import { compose } from '../../../utils';

import {
  NewsArticle
} from '../../../components/news-page-components';
import { Spinner, ErrorIndicator } from '../../../components/shared-components';

class NewsArticleContainer extends Component {

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

    return <NewsArticle
      articles={articles}
    />
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
)(NewsArticleContainer);
