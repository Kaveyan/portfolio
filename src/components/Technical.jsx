import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import newImage from "../assets/images/developer.png";
import "./technical.css";
import newImage2 from "../assets/images/uiux.png";

function Technical() {
  return (
    <div className='main'>
      <div className="titile">What I Do?</div>
      <div className="mern">
        <img src={newImage} alt="Description of the image" />

        <div className='mern-content'>
          <div className="merntitle">Mern Stack Development</div>
          <div className="icons">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <div className="text">
            <p>⚡ Building responsive website front end using React</p>
            <p>⚡ Creating application backend in Node, Express</p>
            <p>⚡ Developing decentralized applications using solidity, truffle, and ganache</p>
          </div>
        </div>
      </div>

      <div className="mern">


        <div className='mern-content2'>
          <div className="merntitle2">UI/UX Design</div>
         
          <div className="text">
          <p>⚡ Designing responsive user interfaces using Figma</p>
           <p>⚡ Creating interactive prototypes for web applications</p>
           
          </div>

        </div>
        <img src={newImage2} alt="Description of the image" />
      </div>

     
    </div>
  );
}

export { Technical };

