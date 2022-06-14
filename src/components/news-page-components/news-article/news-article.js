import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import PageTitle from '../../../components/pages/title';

import { getWeekDay } from '../../../utils';

import './news-article.css';

const NewsArticle = ({ articles }) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const decId = id - 1;
  const { author, title, urlToImage, content, publishedAt } = articles[decId];

  //--------- for DummyApiService tests ---------//
  // const { author, title, urlToImage, content, publishedAt } = articles[id];

  const idx = publishedAt.indexOf('T');
  const articleDate = publishedAt.slice(0, idx);
  const articleWeekDay = getWeekDay(articleDate);

  const textIdx = content.indexOf('[');
  const text = content.slice(0, textIdx);

  const articleAuthor = (author) ? author : 'Jane Doe'

  const pageTitle = 'articles';

  return (
    <div className='news-articles-page'>
      <PageTitle title={pageTitle} />
      <article className='row news-article'>
        <div className='col-sm-2 col-md-3 col-lg-2 news-article-return-block'>
          <button
            className='btn btn-primary news-article-return-button'
            onClick={() => {
              navigate(`/news`);
            }}>
            <span className='news-article-button-arrow'>&#8592;</span>
            <span className='news-article-button-text'>Return</span>
          </button>
        </div>
        <div className='news-article-wrapper'>
          <div className='col-lg-5 news-article-title-wrapper'>
            <h3 className='news-article-title'>{title}</h3>
            <div className='news-article-date-wrapper'>
              <span className='news-article-date-icon' aria-hidden='true'>
                <svg height='13' viewBox='0 0 13 13' width='13' xmlns='http://www.w3.org/2000/svg'                >
                  <path d='m6.5 0c-3.59003125 0-6.5 2.90996875-6.5 6.5 0 3.589625 2.90996875 6.5 6.5 6.5 3.5900312 0 6.5-2.910375 6.5-6.5 0-3.59003125-2.9099688-6.5-6.5-6.5m0 12.1870938c-3.13625 0-5.6875-2.5508438-5.6875-5.6870938s2.55125-5.6875 5.6875-5.6875 5.6875 2.55125 5.6875 5.6875-2.55125 5.6870938-5.6875 5.6870938m.37415625-5.69400005c.00528125-.026.013-.0495625.01340625-.07759375l.00040625-4.34809375c-.03859375-.00975-.09546875-.0186875-.17021875-.02559375-.07515625-.00690625-.15153125-.0105625-.22871875-.0105625-.15478125 0-.26284375.0325-.3225625.0975-.05565625.060125-.08246875.134875-.0869375.221l-.0040625 4.3671875c.0040625.08125.03778125.15234375.0950625.216125l2.361125 2.36640625.2153125.21571875c.03453125-.02071875.0804375-.05484375.13853125-.10278125s.1145625-.099125.16940625-.15396875c.10928125-.10928125.1625-.20840625.15925-.297375-.00365625-.08775-.03940625-.16534375-.10603125-.2331875z'
                    fillRule='evenodd'></path>
                </svg>
              </span>
              <time dateTime={articleDate}
                className='news-article-date'>{articleWeekDay} {articleDate}</time>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='news-article-image-wrapper'>
              <img className='news-article-image'
                src={urlToImage} alt='article-pic' />
            </div>
          </div>
        </div>
        <div className='news-article-block'></div>
        <div className='news-article-text-block'>
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
          <p className='news-article-text'>
            {text.repeat(Math.floor(Math.random() * 4) + 1)}
          </p> <br />
        </div>
        <p className='news-article-author'>By {articleAuthor}</p>
      </article>
    </div>
  )
}

export default NewsArticle;