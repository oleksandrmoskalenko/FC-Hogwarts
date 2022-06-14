const updatePlayersList = (state, action) => {

  if (state === undefined) {
    return {
      players: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_PLAYERS_REQUEST':
      return {
        players: [],
        loading: true,
        error: null,
      };

    case 'FETCH_PLAYERS_SUCCESS':
      return {
        players: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_PLAYERS_FAILURE':
      return {
        players: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.playersList;
  }
}

export default updatePlayersList;