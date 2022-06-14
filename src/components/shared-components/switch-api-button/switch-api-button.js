import React from 'react';

import './switch-api-button.css';

const SwitchApiButton = () => {
  return (
    <div className='col-12 col-md-4 switch-api-button-block'>
      <button className='btn btn-primary switch-api-button'
        onClick={console.log('API-service switched!')}>
        Switch API Service
      </button>
    </div>
  )
}

export default SwitchApiButton;