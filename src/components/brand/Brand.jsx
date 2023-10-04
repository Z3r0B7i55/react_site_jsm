import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './brand.css';


const Brand = () => (
  <div className="portfolio__brand section__padding">

    <div className="portfolio__brand-wrapper">
      <div className="portfolio__brand-button">
        <div className="portfolio__brand-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <span>Facebook</span>
      </div>
    </div>

  </div>
);

export default Brand