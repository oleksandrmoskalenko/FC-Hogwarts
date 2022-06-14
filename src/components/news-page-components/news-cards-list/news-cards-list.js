import React from 'react';

import NewsCardsListItem from '../news-cards-list-item';

import './news-cards-list.css'

const NewsCardsList = ({ articles, onItemSelected }) => {

  return (
    <section className='row news-cards-list'>
      {
        articles.map((article) => {
          const id = articles.findIndex((el) => el === article);

          return (
            <NewsCardsListItem
              article={article}
              onItemSelected={onItemSelected}
              id={id}
              key={id}
            />
          )
        })
      }
    </section>
  )
}

export default NewsCardsList;