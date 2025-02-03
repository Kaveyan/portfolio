import React from 'react'
import "./education.css"
import newImage3 from "../assets/images/bit.png";
import newImage4 from "../assets/images/nss.png";

 function Education() {
  return (
    <div className="education">
      <div class="edutitle">Education</div>
      <div className="edumain">
        <div className='logo'>
          <img src={newImage3} alt="" />
        </div>
        <div className="edutext">

          <p className='clg'>Bannari Aamman Institute Of Technology</p>
          <p className='clgtext'>Bachelor Degree In Computer Science</p>
          <p className='clgtext'>November 2022 - March 2026</p>
          <p className='clgtext'>CGPA - 8.11 </p>
          <div className="nss">
    
              <img src={newImage4} alt="" />
          
            <div className='nsstext'>
            <p  className='nssmain'>volunteer </p>
            <p className='nssmain-text'>Active Member At National Service Scheme BIT</p>
            </div>
          </div>
        </div>
      </div>
      <h2>
      Made with ❤️ by kaveyan 
      </h2>
    </div>
  )
}
export {Education}
