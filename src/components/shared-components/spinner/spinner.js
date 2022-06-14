import React from 'react';

import './spinner.css';

const Spinner = () => {

  return (
    <div className='laoding-wrapper'>
      <div className='loading-signal'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;