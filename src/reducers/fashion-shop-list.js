const updateFashionShopList = (state, action) => {

  if (state === undefined) {
    return {
      fashionList: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_FASHION_LIST_REQUEST':
      return {
        fashionList: [],
        loading: true,
        error: null,
      };

    case 'FETCH_FASHION_LIST_SUCCESS':
      return {
        fashionList: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_FASHION_LIST_FAILURE':
      return {
        fashionList: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.fashionShopList;
  }
}

export default updateFashionShopList;