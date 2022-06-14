
//FETCH PLAYERS actions
const playersLoaded = (newPlayers) => {
  return {
    type: 'FETCH_PLAYERS_SUCCESS',
    payload: newPlayers
  };
};

const playersRequested = () => {
  return {
    type: 'FETCH_PLAYERS_REQUEST'
  };
};

const playersError = (error) => {
  return {
    type: 'FETCH_PLAYERS_FAILURE',
    payload: error
  };
};

//FETCH ARTICLES actions
const articlesLoaded = (newArticles) => {
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: newArticles
  };
};

const articlesRequested = () => {
  return {
    type: 'FETCH_ARTICLES_REQUEST'
  };
};

const articlesError = (error) => {
  return {
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error
  };
};

//FETCH FASHION-LIST actions
const fashionListLoaded = (newItems) => {
  return {
    type: 'FETCH_FASHION_LIST_SUCCESS',
    payload: newItems
  };
};

const fashionListRequested = () => {
  return {
    type: 'FETCH_FASHION_LIST_REQUEST'
  };
};

const fashionListError = (error) => {
  return {
    type: 'FETCH_FASHION_LIST_FAILURE',
    payload: error
  };
};

//FETCH FOOTBALL-PHOTOS actions
const fixturesPhotosLoaded = (newPhotos) => {
  return {
    type: 'FETCH_FIXTURES_PHOTOS_SUCCESS',
    payload: newPhotos
  };
};

const fixturesPhotosRequested = () => {
  return {
    type: 'FETCH_FIXTURES_PHOTOS_REQUEST'
  };
};

const fixturesPhotosError = (error) => {
  return {
    type: 'FETCH_FIXTURES_PHOTOS_FAILURE',
    payload: error
  };
};

//FETCH SHOPPING-CART actions
const itemAddedToCart = (itemId) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: itemId
  };
};

const itemRemovedFromCart = (itemId) => {
  return {
    type: 'ITEM_REMOVED_FROM_CART',
    payload: itemId
  };
};

const allItemsRemovedFromCart = (itemId) => {
  return {
    type: 'ALL_ITEMS_REMOVED_FROM_CART',
    payload: itemId
  };
};

//FETCH FASHION-LIST function
const fetchFashionList = (shopApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(fashionListRequested());
  // receive data, 
  // then dispatch action to store when data will come
  shopApiService.getAllProducts()
    .then((data) => dispatch(fashionListLoaded(data)))
    .catch((err) => dispatch(fashionListError(err)));
};

//FETCH PLAYERS function
const fetchPlayers = (hpApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(playersRequested());
  // receive data, 
  // then dispatch action to store when data will come
  hpApiService.getAllPlayers()
    .then((data) => dispatch(playersLoaded(data)))
    .catch((err) => dispatch(playersError(err)));
};

const fetchDummyPlayers = (dummyApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(playersRequested());
  // receive data, 
  // then dispatch action to store when data will come
  dummyApiService.getAllPlayers()
    .then((data) => dispatch(playersLoaded(data)))
    .catch((err) => dispatch(playersError(err)));
};

const fetchWithRandomErrorPlayers = (hpApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(playersRequested());
  // receive data, 
  // then dispatch action to store when data will come
  hpApiService.getWithRandomErrorAllPlayers()
    .then((data) => dispatch(playersLoaded(data)))
    .catch((err) => dispatch(playersError(err)));
};


//FETCH ARTICLES function
const fetchArticles = (newsApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(articlesRequested());
  // receive data, 
  // then dispatch action to store when data will come
  newsApiService.getAllSportsArticles()
    .then((data) => dispatch(articlesLoaded(data)))
    .catch((err) => dispatch(articlesError(err)));
};

const fetchWithRandomErrorArticles = (newsApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(articlesRequested());
  // receive data, 
  // then dispatch action to store when data will come
  newsApiService.getWithRandomErrorAllSportsArticles()
    .then((data) => dispatch(articlesLoaded(data)))
    .catch((err) => dispatch(articlesError(err)));
};

//FETCH FIXTURES PHOTOS function
const fetchFixturesPhotos = (newsApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(fixturesPhotosRequested());
  // receive data, 
  // then dispatch action to store when data will come
  newsApiService.getAllFixturesPhotos()
    .then((data) => dispatch(fixturesPhotosLoaded(data)))
    .catch((err) => dispatch(fixturesPhotosError(err)));
};

const fetchWithRandomErrorFixturesPhotos = (newsApiService) => () => (dispatch) => {
  // каждый раз при переходе на компонент
  // компонет будет запрашивать обновление данных
  dispatch(fixturesPhotosRequested());
  // receive data, 
  // then dispatch action to store when data will come
  newsApiService.getWithRandomErrorAllSportsArticles()
    .then((data) => dispatch(fixturesPhotosLoaded(data)))
    .catch((err) => dispatch(fixturesPhotosError(err)));
};


export {
  fetchPlayers,
  fetchDummyPlayers,
  fetchWithRandomErrorPlayers,
  fetchArticles,
  fetchWithRandomErrorArticles,
  fetchFashionList,
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart,
  fetchFixturesPhotos,
  fetchWithRandomErrorFixturesPhotos
};

