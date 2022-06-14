import React from 'react';

import TeamCardsListItem from '../team-cards-list-item';

import { sortPlayerList } from '../../../utils';

import './team-cards-list.scss';

const TeamCardsList = ({ players }) => {

  const playersSortedList = sortPlayerList(players);

  return (
    <section className='team-cards-list'>
      <div className='team-card-container'>
        {
          playersSortedList.map((player) => {
            return (
              <TeamCardsListItem
                player={player}
                key={player.id} />
            )
          })
        }
      </div>
    </section>
  )
}

export default TeamCardsList;