import React from 'react';

import { useNavigate } from 'react-router-dom';

const TeamCardsListItem = ({ player }) => {
  const { id, name, nickname,
    image, hogwartsHouse, actor,
    age, position, nationality } = player;

  const navigate = useNavigate();

  return (
    <div className='player-card-wrapper' key={id}
      onClick={() => {
        navigate(`/players/${id + 1}`);
      }} >
      <div className='player-card light'>
        <div className='player-card-overlay'>
          <h2>{nickname}</h2>
          <div className='player-image-wrapper'>
            <img className='player-image' src={image} alt='player' />
          </div>
        </div>
        <div className='reverse-side-container'>
          <h2 className='back-h2'>{name}</h2>
          <div className='details-text'>
            <span><b>House Team: </b>{hogwartsHouse}</span>
            <span><b>Role Model: </b>{actor}</span>
            <span><b>Age: </b>{age}</span>
            <span><b>Position: </b>{position}</span>
            <span><b>Nationality: </b>{nationality}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCardsListItem;