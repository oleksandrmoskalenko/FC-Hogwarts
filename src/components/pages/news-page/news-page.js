import React from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  NewsCardsListContainer
} from '../../../containers/pages-components-containers';

import PageTitle from '../title';

import './news-page.css';

const NewsPage = () => {

  const navigate = useNavigate();

  const getRandomAge = (min, max) => {
    // random number from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const randomId = getRandomAge(1, 50);

  const title = 'news';

  return (
    <div className='news-page'>
      <Breadcrumbs aria-label='breadcrumb' separator='›'
        sx={{ m: '15px 0 30px 20px' }}>
        <Link to='/'
          style={{
            display: 'flex', alignItems: 'center',
            textDecoration: 'none', color: 'inherit'
          }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Home
        </Link>
        <Typography color='text.primary'>News</Typography>
      </Breadcrumbs>

      <PageTitle title={title} />
      <div className='news-page-random-block'>
        <button
          className='btn btn-primary news-page-button'
          onClick={() => {
            navigate(`/news/articles/${randomId}`);
          }}>
          Show Random Article
        </button>
      </div>
      <NewsCardsListContainer
        onItemSelected={(id) => {
          navigate(`/news/articles/${id + 1}`);
        }}
      />
    </div>
  )
}

export default NewsPage;