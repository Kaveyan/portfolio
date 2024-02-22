import React from 'react'
import {greeting,socialMediaLinks} from "../portfolio"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLink } from '@fortawesome/free-solid-svg-icons';

import newImage from "../assets/images/new.jpg";

import "./main.css"

function Main() {
  const emailAddress = 'kaveyanb@gmail.com';
  const gmailUrl = `mailto:${emailAddress}`;
  
  return (
    <div className='content'>

  
    <div className="main">
      <div className="heading">
        <p>{greeting.title}</p>
      </div>
      <div className="sub">
        <p>{greeting.subTitle}</p>
      </div>
      <div className="social">
        <div className='lin'>
          <a href={socialMediaLinks.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='git'>
          <a href={socialMediaLinks.github}>
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
        <div className='gmail'>
          <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        

      </div>
      <div className='resume'>
          <a href='https://drive.google.com/file/d/1ezQU24Xs-ejmtZ11bzTEkhhpe4upkPsE/view?usp=sharing'><button>SEE MY RESUME<FontAwesomeIcon icon={faLink} /></button></a>
        </div>
    </div>
    <div className='img'>
      <img src={newImage} alt="Description of the image" />
    </div>

    </div>
    
    
  )
}
export {Main}
