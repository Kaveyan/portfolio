import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faPython, faJs } from '@fortawesome/free-brands-svg-icons';

import "./project.css"

function Project() {
  return (
    <div className="projectmain">
      <div>
      <p className='title'>Projects</p>
      </div>
      <div className='projextbox'>
        <div className='project'>
             <p><FontAwesomeIcon icon={faBookBookmark} />CLI APPLICATION</p>
             <p className='projecttext'>
             🚀Developed a suite of Console applications, including an ATM console
application and Railway Booking System. 
             </p>
             <div className='pro'>
         
             <a href='https://github.com/Kaveyan/-CLI-Application'><button>VIEW CODE</button></a>
             </div>
             
        

        </div>
        <div className='project'>
            <p><FontAwesomeIcon icon={faBookBookmark} />STUDENT PERFORMANCE TRACKER</p>
            <p className='projecttext'> 🔥Tracking and managing student
performance by automating the process of uploading and analyzing </p>
            <div className='pro'>
                  <FontAwesomeIcon icon={faReact} />
                  <FontAwesomeIcon icon={faNode} />
                   <a href="https://github.com/Kaveyan/student_performance_tracker"><button>VIEW CODE</button></a>
            </div>
            

         </div>
        <div className='project'>
             <p><FontAwesomeIcon icon={faBookBookmark} />BIT NOTES SHARE</p>
             <p className='projecttext'> 🤖 Increased study material accessibility by 60% by developing a platform where
students can share their handwritten notes.</p>
             <div className='pro'>
              <FontAwesomeIcon icon={faReact} />
             <FontAwesomeIcon icon={faNode} />
             <a href='https://github.com/Kaveyan/bitlearn-notes'><button>VIEW CODE</button></a>
             </div>
           
        </div>
      </div>
    </div>
  )
}
export {Project}
