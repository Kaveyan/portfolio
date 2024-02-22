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
             <p><FontAwesomeIcon icon={faBookBookmark} />Search Job</p>
             <p className='projecttext'>
             🚀 job-seeking platform with integrates e-learning modules and freelance opportunities to create an all-in-one career hub
             </p>
             <div className='pro'>
         
             <FontAwesomeIcon icon={faReact} />
             <FontAwesomeIcon icon={faNode} />
             <a href='https://github.com/Kaveyan'><button>VIEW CODE</button></a>
             </div>
             
        

        </div>
        <div className='project'>
            <p><FontAwesomeIcon icon={faBookBookmark} />Medicinal Value Detection</p>
            <p className='projecttext'> 🔥 Project focused on finding the medicinal  Value of Plant Leaves using Deep </p>
            <div className='pro'>
                   <FontAwesomeIcon icon={faPython} />
                  
                   <a href="https://github.com/Kaveyan"><button>VIEW CODE</button></a>
            </div>
            

         </div>
        <div className='project'>
             <p><FontAwesomeIcon icon={faBookBookmark} />Just Buy</p>
             <p className='projecttext'> 🤖 "Just Buy" is a front-end project developed using React and users across different categories</p>
             <div className='pro'>
             <FontAwesomeIcon icon={faJs} />
             <FontAwesomeIcon icon={faReact} />
             <a href='https://github.com/Kaveyan'><button>VIEW CODE</button></a>
             </div>
           
        </div>
      </div>
    </div>
  )
}
export {Project}
