import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import hack from "../assets/images/mistral.png";
import bit from "../assets/images/bit.png";
import leet from "../assets/images/leet.png";
import "./achievements.css"



 function Achievements() {
  return (
    <div className="achievemebt">
         <div>
        <p className='maintitle'>Achievements And Certifications <FontAwesomeIcon icon={faTrophy} /></p>
        
        </div>
        <div className="box">
            <div className="bit">
                <img src={hack} alt="" />
                <p className='achititle'>Mistral Hackfest'23 -Finalist</p>
                <p className='achicontent'>Seletec Mistral Hackfest '23 - Finalist  Secured a position in the Top 10 Teams out of 300+ colleges. </p>
                <div>
                    <a href='https://drive.google.com/file/d/13vhPs9e72EmaZj20NTgVi8uJX5r__Smq/view?usp=sharing'><button>Certificate</button></a>
                  
                </div>



            </div>
            <div className="bit">
                <img src={bit} alt="" />
                <p className='achititle'>BIT Hack'23 -Finalist</p>
                <p className='achicontent'> Seletec  BIT Hack'23 -Finalist Secured a position in the Top 4 out of 50+ teams. </p>
                <div>
                <a href='https://drive.google.com/file/d/1FXYRkXYUBINWh486RVcc5KzFMeelq7It/view?usp=sharing'><button>Certificate</button></a>
                   
                </div>


            </div>
            <div className='bit'>
                <img src={leet} alt="" />
                <p className='achititle'>Solved 200+ problems</p>
                <p className='achicontent'>Secured a contest rating 1,460 among all users.</p>
                <div>
                   
                <a href='https://leetcode.com/kaveyanb/'><button>Certificate</button></a>
                </div>

            </div>
        </div>
    </div>
   
    
  )
}
export {Achievements}