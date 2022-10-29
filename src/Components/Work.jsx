import React from 'react'
import '../App.css'

function Work() {

     let Experience = [
        {expname : 'IT Intern', Type : 'Internship' ,
         place : 'Erbil Polytechnic University',
         about : 'I was at IT support for multiple EPU institutes. I worked as a data entrist, database support and network support. ',
         id : 'EPU'},

     ]

let listExperience = Experience.map((Experience) =>
<div className="work-card" id={Experience.id}>
      <h2>{Experience.expname}</h2> 
      <h3 className='work-text'>{Experience.place}</h3>
      <h3 className=''>{Experience.Type}</h3>
      <div className={'work-about'}>{Experience.about}</div>
      
       </div>
);

  return (
    <div className="Projects" id='Projects'>
    <h1>Work</h1>
    <p></p>
    {/*<h2>Projects</h2>*/}

    <h2>Experience</h2>
    {listExperience}
   </div>
  )
}

export default Work