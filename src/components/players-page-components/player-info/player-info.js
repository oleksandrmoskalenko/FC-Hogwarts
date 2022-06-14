import React from 'react';

import { sortPlayerList } from '../../../utils';

import './player-info.css';

const PlayerInfo = ({ players, id }) => {

  const playersSortedList = sortPlayerList(players);

  const player = playersSortedList[id - 1];

  const renderPersonInfo = (item) => {
    const { name, age, hogwartsHouse, image, nationality, position, actor } = item;

    return (
      <div className='player-info'>

        <div className='col-6 player-image'>
          <img src={image} alt='player-pic' />

          <div className='player-info-block'>
            <h3 className='player-info-block-title'>Info</h3>
            <ul className='player-info-list'>
              <li>House Team: {hogwartsHouse}</li>
              <li>Role model: {actor}</li>
              <li>Age: {age}</li>
              <li>Position: {position}</li>
              <li>Nationality: {nationality}</li>
            </ul>
          </div>

        </div>

        <div className='col-6 player-info-wrapper'>
          <h2 className='player-info-name'>{name}</h2>
          <p className='player-info-text'>
            Football or soccer, which is considered to be the most popular sport in the world,
            is a team sport played between two teams of eleven players using a spherical ball.
          </p>
        </div>

      </div>
    )
  }

  if (player === undefined) {
    return <div className='player-info-default-text'>Select a player...</div>
  }

  return renderPersonInfo(player);
}

export default PlayerInfo;