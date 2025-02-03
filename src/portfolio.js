

const greeting = {
  username: "kaveayan",
  title: "Hi all, I'm kaveyan",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1XZSOxDT_iX3-p9pEk_AU50W9zg4F_e8Q/view?usp=sharing", // Set to empty to hide the button
  
};



const socialMediaLinks = {
  github: "https://github.com/Kaveyan",
  linkedin: "https://www.linkedin.com/in/kaveyan-b-8195ba244/"
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: 
   
      " Develop highly interactive Front end / User Interfaces for your web  applications",


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
   
  ],
 
};



const educationInfo = {
 
  schools: [
    {
      schoolName: "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor degree in Computer Science",
      duration: "September 2022 - April 2026",
     
    }
  ]
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};





export {

  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,

};
