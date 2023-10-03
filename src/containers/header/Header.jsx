import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import headerImg from '../../assets/ai.png';

const Header = () => (
    <div className="portfolio__header section__padding" id="home">
      <div className = "portfolio__header-content">
        <h1 className="gradient__text">
          Hi, I'm Charlie. I am a software developer/database designer.
        </h1>
        <p> I'm a back end developer and focus on writting clean and effcicient code. I like to try new things as well and explore the possibilities of programming. I love Java, Python and the C's with a little React JS.</p>
        {/*
        <div className="portfolio__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button"> Contact Me </button>
        </div>
        */}
        <div className="portfolio__header-content__people">
          <img src={people} alt="people"/>
          <p>Please feel free to network with me...</p>
        </div>
      </div>

      <div className='portfolio__header-image'>
        <img src={headerImg} alt="headerImg"/>
      </div>
    </div>
  );

export default Header