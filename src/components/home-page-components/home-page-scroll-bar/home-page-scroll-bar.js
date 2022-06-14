import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import HomePageScrollBarModal from '../home-page-scroll-bar-modal';

import './home-page-scroll-bar.css';

const HomePageScrollBar = ({ fixturesPhotos }) => {


  const [photoId, setPhotoId] = useState(0);
  const [showScrollBarPhoto, setShowScrollBarPhoto] = useState(false);

  const closePhotoModal = () => setShowScrollBarPhoto(false);

  const showPhotoModal = (idx) => {
    setShowScrollBarPhoto(true);

    const itemId = fixturesPhotos.findIndex((el) => el.id === idx);
    setPhotoId(itemId);
  }

  return (
    <section className='home-page-photos'>
      <div className='home-page-subtitle-wrapper'>
        <div className='col-12 col-sm-8 home-page-block'>
          <h5 className='home-page-subtitle rounded-pill'>Moments of the season</h5>
        </div>
        <div className='col-12 col-sm-4 home-page-block home-page-block__small'>
          <Link className='home-page-link' to='/matches'>
            All matches
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
      <div className='home-page-scroll-bar'>
        <Box className='home-page-scroll-bar-box'
          sx={{ width: '90%', minHeight: 829 }}>
          <Masonry columns={{ lg: 3, sm: 2, xs: 1 }}
            spacing={2}>
            {
              fixturesPhotos.map((item, index) => (
                <div className='home-page-scroll-bar-item'
                  key={index}>
                  <OpenInFullIcon sx={{
                    position: 'absolute', top: '5px', right: '5px',
                    width: '35px', height: '35px',
                    color: '#fff', background: '#1a1a1a90'
                  }}
                    className='home-page-scroll-bar-item-icon'
                    onClick={() => showPhotoModal(index)} />
                  <img
                    src={`${item.image}?w=162&auto=format`}
                    srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: 'block',
                      width: '100%',
                    }}
                    className='home-page-scroll-bar-photo' />
                </div>
              ))
            }
          </Masonry>
        </Box>
      </div>

      <HomePageScrollBarModal
        photoId={photoId}
        photos={fixturesPhotos}
        show={showScrollBarPhoto}
        closeModal={closePhotoModal} />
    </section >
  )
}

export default HomePageScrollBar;