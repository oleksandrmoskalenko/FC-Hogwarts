import React from 'react';

import './app-footer.css';

const AppFooter = () => {
  return (
    <footer className='text-center text-lg-start bg-light text-muted app-footer'>
      <section
        className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom app-footer-section app-footer-section__social-media'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://t.me/moskalenko_developer' className='me-4 text-reset'>
            <i className='bi bi-telegram app-footer-icon'></i>
          </a>
          <a href='https://www.linkedin.com/in/oleksandr-moskalenko/' className='me-4 text-reset'>
            <i className='bi bi-linkedin app-footer-icon'></i>
          </a>
          <a href='https://github.com/oleksandrmoskalenko' className='me-4 text-reset'>
            <i className='bi bi-github app-footer-icon'></i>
          </a>
        </div>
      </section>

      <section className='app-footer-section'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-6 col-lg-4 col-xl-3 mx-auto mb-4 app-footer-block'>
              <h6 className='text-uppercase fw-bold mb-4 app-footer-subtitle'>
                <i className='fas fa-gem me-3'></i>Hogwarts FC
              </h6>
              <p className='app-footer-block-text'>
                Here you can find my experimental Pet-Project.
              </p>
              <p className='app-footer-block-text'>
                As well as stack of technologies that were used in the process.
              </p>
              <p className='app-footer-block-text'>
                In addition, you could contact me by writing by mail which also attached to the set.
              </p>
            </div>

            <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mb-4 app-footer-block'>
              <h6 className='text-uppercase fw-bold mb-4 app-footer-subtitle'>
                Technologies
              </h6>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://uk.reactjs.org'>React</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://react-redux.js.org'>Redux</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://reactrouter.com'>React-Router-DOM</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://getbootstrap app-footer-link.com'>
                  Bootstrap</a>
              </p>
            </div>

            <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mb-4 app-footer-block'>
              <h6 className='text-uppercase fw-bold mb-4 app-footer-subtitle'>
              Technologies
              </h6>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://flexboxfroggy.com'>Flexbox</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://mui.com'>Material UI</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://github.com/fedeperin/harry-potter-api-english/blob/main/README.md'>REST API</a>
              </p>
              <p>
                <a className='text-reset app-footer-link' 
                href='https://sass-lang.com'>Sass</a>
              </p>
            </div>

            <div className='col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 app-footer-block'>
              <h6 className='text-uppercase fw-bold mb-4 app-footer-subtitle'>
                Contact
              </h6>
              <p className='app-footer-info'>
                <i className='bi bi-house-door me-3'></i> Poltava, UA
                </p>
              <p className='app-footer-info'>
                <i className='bi bi-phone me-3'></i> +38 &#40;098&#41; 640 4313
              </p>
              <p className='app-footer-info app-footer-info__text-small'>
                <i className='bi bi-envelope me-3 app-footer-info'></i>
                moskalenko.developer@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className='text-center p-4 app-footer-copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: Oleksandr Moskalenko
      </p>
    </footer>
  )
}

export default AppFooter;