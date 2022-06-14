const sortPlayerList = (arr) => {
  const playersList = JSON.parse(JSON.stringify(arr));

  const playersSortedList = playersList
    .sort((a, b) => a.name.localeCompare(b.name));
  playersSortedList
    .map((el) => el.id = playersSortedList.indexOf(el));

  return playersSortedList;
};

export default sortPlayerList;