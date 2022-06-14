import React from 'react';

import { sortPlayerList } from '../../../utils';

import './players-list.css';

const PlayersList = ({ players, onItemSelected }) => {

  const playersSortedList = sortPlayerList(players);

  const itemsListRender = (startId, endId) => {
    return playersSortedList
      .filter(({ id }) => (startId <= id && id <= endId))
      .map((player) => {
        const { id, name } = player;

        const nameArr = name.split(' ');
        const shortcutName = nameArr
          .filter((el) =>
            (el === nameArr[0] || el === nameArr[nameArr.length - 1]))
          .join(' ');

        return (
          <button type='button'
            className='btn btn-primary players-list-item'
            key={id - 1}
            onClick={() => onItemSelected(id)}>
            {shortcutName}
          </button>
        )
      })
  }

  return (
    <div className='players-list'>
      <div className='btn-group-vertical players-list-column'>
        {itemsListRender(0, 6)}
      </div>
      <div className='btn-group-vertical players-list-column'>
        {itemsListRender(7, 13)}
      </div>
    </div>
  )
}

export default PlayersList;