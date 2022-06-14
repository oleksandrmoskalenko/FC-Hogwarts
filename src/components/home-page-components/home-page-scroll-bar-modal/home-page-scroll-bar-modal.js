import React, { useEffect, useState } from 'react';

import { Modal } from 'react-bootstrap';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './home-page-scroll-bar-modal.css';

const HomePageScrollBarModal = ({ show, closeModal, photos, photoId }) => {


  const [itemId, setItemId] = useState(photoId);
  useEffect(() => setItemId(photoId), [photoId]);

  const showNextPhoto = () => {
    if (itemId < 24) {
      setItemId((itemId) => itemId + 1)
    }
  };
  const showPrevPhoto = () => {
    if (itemId > 0) {
      setItemId((itemId) => itemId - 1)
    }
  }

  const photo = photos[itemId];
  const { title, image, description } = photo;

  return (
    <div>
      <Modal show={show} onHide={closeModal} size='xl'
        className='navbar-shopping-basket-modal'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title className='home-page-scroll-bar-modal-title'>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt={title}
            className='home-page-scroll-bar-modal-photo' />
        </Modal.Body>
        <Modal.Footer>
          <Accordion
            className='home-page-scroll-bar-modal-accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                className='home-page-scroll-bar-modal-text'>
                Click to read the description
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='home-page-scroll-bar-modal-description'>
                {description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Modal.Footer>

        <svg className='home-page-scroll-bar-modal-arrow-prev'
          onClick={showPrevPhoto}
          version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
          viewBox='0 0 512 512' style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace='preserve'>
          <circle style={{ fill: '#71E2F0' }} cx='256' cy='256' r='256' />
          <path style={{ fill: '#38C6D9' }} d='M190.338,405.356L294.15,509.168c86.556-12.934,158.941-69.198,194.395-146.013L363.972,238.582
	L190.338,405.356z'/>
          <path style={{ fill: '#263A7A' }} d='M287.494,265.447l-97.22,97.22c-11.783,11.783-11.781,30.884,0,42.667l0,0
	c11.783,11.781,30.884,11.781,42.667,0l128-128c11.783-11.781,11.781-30.884,0-42.667l-128-128
	c-11.783-11.781-30.884-11.781-42.667,0l0,0c-11.783,11.781-11.781,30.884,0,42.667l97.22,97.22
	C292.712,251.771,292.712,260.23,287.494,265.447z'/>
          <path style={{ fill: '#121149' }} d='M291.407,256c0,3.418-1.305,6.839-3.913,9.447l-97.22,97.22c-11.783,11.781-11.783,30.884,0,42.667
	l0,0c11.783,11.781,30.884,11.781,42.667,0l128-128c5.891-5.891,8.837-13.612,8.837-21.333H291.407z'/>
          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>

        <svg className='home-page-scroll-bar-modal-arrow-next'
          onClick={showNextPhoto}
          version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
          viewBox='0 0 512 512' style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace='preserve'>
          <circle style={{ fill: '#71E2F0' }} cx='256' cy='256' r='256' />
          <path style={{ fill: '#38C6D9' }} d='M190.338,405.356L294.15,509.168c86.556-12.934,158.941-69.198,194.395-146.013L363.972,238.582
	L190.338,405.356z'/>
          <path style={{ fill: '#263A7A' }} d='M287.494,265.447l-97.22,97.22c-11.783,11.783-11.781,30.884,0,42.667l0,0
	c11.783,11.781,30.884,11.781,42.667,0l128-128c11.783-11.781,11.781-30.884,0-42.667l-128-128
	c-11.783-11.781-30.884-11.781-42.667,0l0,0c-11.783,11.781-11.781,30.884,0,42.667l97.22,97.22
	C292.712,251.771,292.712,260.23,287.494,265.447z'/>
          <path style={{ fill: '#121149' }} d='M291.407,256c0,3.418-1.305,6.839-3.913,9.447l-97.22,97.22c-11.783,11.781-11.783,30.884,0,42.667
	l0,0c11.783,11.781,30.884,11.781,42.667,0l128-128c5.891-5.891,8.837-13.612,8.837-21.333H291.407z'/>
          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
      </Modal>

    </div>
  )
}

export default HomePageScrollBarModal;