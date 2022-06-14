import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';

import Card from '@mui/material/Card';

import { useNavigate } from 'react-router-dom';

import './slider.scss';

const Slider = ({ items }) => {

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className='carousel-container'>
      <Swiper
        className='swiper-container'
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current
        }}
        effect={'slide'}
        speed={1600}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2000 }}
        breakpoints={{
          767.98: {
            slidesPerView: 2,
            speed: 800
          },
          991.98: {
            slidesPerView: 3,
            speed: 800
          },
        }}

        onInit={(swiper) => {
          swiper.params.navigation.prevEl
            = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl
            = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {
          items.map((item) => {
            const id = items.findIndex((el) => el === item);
            return (
              <SwiperSlide className='swiper-slide' key={id}
                onClick={() => {
                  navigate(`/news/articles/${id + 1}`);
                }}>
                <Card className='swiper-slide-wrapper'>
                  <img className='swiper-slide-img'
                    src={item.urlToImage} alt={`pic-${id}`} />
                  <span className='swiper-slide-title'>{item.title}</span>
                </Card>
              </SwiperSlide>
            )
          })
        }
        <div className='swiper-nav-prev'
          ref={swiperNavPrevRef}></div>
        <div className='swiper-nav-next'
          ref={swiperNavNextRef}></div>
      </Swiper>
    </div >
  )
}

export default Slider;