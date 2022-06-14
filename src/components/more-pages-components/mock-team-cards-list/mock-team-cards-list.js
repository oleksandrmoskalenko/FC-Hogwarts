import React from 'react';

import MockTeamCardsListItem from '../mock-team-cards-list-item';

import '../../teams-page-components/team-cards-list/team-cards-list.scss';

const MockTeamCardsList = ({ players }) => {

  return (
    <section className='team-cards-list'>
      <div className='team-card-container'>
        {
          players.map((player) => {
            return (
              <MockTeamCardsListItem
                player={player}
                key={player.id} />
            )
          })
        }
      </div>
    </section>
  )
}

export default MockTeamCardsList;