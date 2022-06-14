const updateFixturesPhotosList = (state, action) => {
  if (state === undefined) {
    return {
      fixturesPhotos: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_FIXTURES_PHOTOS_REQUEST':
      return {
        fixturesPhotos: [],
        loading: true,
        error: null,
      };

    case 'FETCH_FIXTURES_PHOTOS_SUCCESS':
      return {
        fixturesPhotos: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_FIXTURES_PHOTOS_FAILURE':
      return {
        fixturesPhotos: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.fixturesPhotosList;
  }
}

export default updateFixturesPhotosList;