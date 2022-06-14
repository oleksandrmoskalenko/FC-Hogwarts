import React from 'react';

import './error-indicator.css';
import icon from './error-pic.png';

const ErrorIndicator = () => {

  return (
    <div className='error-indicator'>
      <img src={icon} alt='error-icon' />
      <span className='error-text text-center'>
        Something has gone wrong!
      </span>
    </div>
  );
};

export default ErrorIndicator;