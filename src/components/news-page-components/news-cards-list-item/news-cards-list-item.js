import React from 'react';

const NewsCardsListItem = ({ article, onItemSelected, id }) => {
  const { title, description, urlToImage } = article;

  return (
    <div className='card news-cards-list-item' style={{ width: '24rem' }}>
      <div className='news-cards-list-image-wrapper'>
        <img src={urlToImage} className='card-img-top news-cards-list-image' alt='news-card-pic' />
      </div>
      <div className='card-body news-cards-list-block'>
        <h5 className='card-title news-cards-list-title'>{title}</h5>
        <p className='card-text news-cards-list-text'>{description}</p>
        <button
          className='btn btn-link news-cards-list-button-link'
          onClick={() => onItemSelected(id)}
        >Continue reading...</button>
      </div>
    </div>
  )
}

export default NewsCardsListItem;