import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "./code.css"
import { Profile } from './Profile';

function Code() {
  return (
    <div className='skill'>
    <div className='code'>
        <div className='ti'>Proficiency</div>
        <div className='main'>
        
        <div className="star">
            <p>Frontend/Design</p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
        </div>
        <div className="star">
            <p className='backend'>Backend</p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
         
        </div>
       
        <div className="star">
        <p className='dsa'>DSA</p>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
        </div>
        
        </div>
        
    </div>
    <Profile/>
  </div>
  )
}

export {Code}
