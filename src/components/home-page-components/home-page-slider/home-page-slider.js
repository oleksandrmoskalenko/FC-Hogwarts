import React from 'react';

import { Link } from 'react-router-dom';

import Slider from '../../shared-components/slider';

import './home-page-slider.css';

const HomePageSlider = ({ articles }) => {
  return (
    <section className='home-page-slider'>
      <div className='home-page-subtitle-wrapper home-page-subtitle-wrapper__home-page-slider'>
        <div className='col-12 col-sm-8 home-page-block'>
          <h5 className='home-page-subtitle rounded-pill'>Headlines</h5>
        </div>
        <div className='col-12 col-sm-4 home-page-block home-page-block__small'>
          <Link className='home-page-link' to='/matches'>
            All news
            <div className='home-page-arrow-wrapper'>
              <svg viewBox='0 0 15 15' className='home-page-arrow'
                fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5 3l5 5-5 5' stroke='currentColor'
                  strokeWidth='2' />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <Slider items={articles} />
    </section>
  )
}

export default HomePageSlider;
