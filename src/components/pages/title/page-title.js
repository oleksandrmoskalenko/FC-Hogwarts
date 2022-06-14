import React from 'react';

import './page-title.css';

const PageTitle = ({ title }) => {
  return (
    <div className='col-12 col-md-8 page-title-block'>
      <h2 className='page-title'>{title} Page</h2>
    </div>
  )
}

export default PageTitle;