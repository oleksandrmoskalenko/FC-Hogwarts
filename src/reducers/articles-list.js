const updateArticlesList = (state, action) => {

  if (state === undefined) {
    return {
      articles: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return {
        articles: [],
        loading: true,
        error: null,
      };

    case 'FETCH_ARTICLES_SUCCESS':
      return {
        articles: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_ARTICLES_FAILURE':
      return {
        articles: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.articlesList;
  }
}

export default updateArticlesList;