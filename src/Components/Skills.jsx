import React from 'react'
import '../App.css'

import { SiJavascript, SiHtml5, SiCss3, SiJava, SiReact, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiAdobexd, SiCplusplus, SiGithub, SiLinkedin, SiGmail} from 'react-icons/si'

function Skills() {

    let programming = [ 
        {title : 'Java', icon : <SiJava/> ,  color : 'color-java'},
        {title : 'C++', icon : <SiCplusplus/> ,  color : 'color-cpp'},
        {title : 'Javascript', icon : <SiJavascript/>,  color : 'color-javascript'}
      ];
      
    let webnDesign = [ 
        {title : 'HTML', icon : <SiHtml5/> ,  color : 'color-html'},
        {title : 'CSS', icon : <SiCss3/> ,  color : 'color-css'},
        {title : 'Tailwind', icon : <SiTailwindcss/>,  color : 'color-tailwind'},
        {title : 'Bootstrap', icon : <SiBootstrap/> ,  color : 'color-bootstrap'},
        {title : 'React', icon : <SiReact/> ,  color : 'color-react'},
        {title : 'Photoshop', icon : <SiAdobephotoshop/>,  color : 'color-photoshop'},
        {title : 'Adobe XD', icon : <SiAdobexd/> ,  color : 'color-adobeXD'},
      ];
      
      
      const listProgramming = programming.map((list) =>
      <div className="skills-card">
      <h3>{list.icon}</h3> 
      <h2 className='skills-text'>{list.title}</h2>
      <div className={"myBar"}><div class={`myProgress ${list.color} `} ></div></div>
       </div>
      );
      
      const listDesign = webnDesign.map((list) =>
      <div className="skills-card">
      <h3>{list.icon}</h3> 
      <h2 className='skills-text'>{list.title}</h2>
      <div className={"myBar"}><div class={`myProgress ${list.color}`}></div></div>
       </div>
      );

  return (
    <div className="Skills" id='Skills'>
    <h1>My Skillsets</h1> 
    <p>I have strong interest in various fields. Programming and Designing are on the top among them.</p>
   <h2 className='skills-top'>Programming</h2> 
   <div className="skills-programming">
            {listProgramming}
        </div>

       <h2 className='skills-top'> Web Development & Design</h2>
        <div className="skills-show">
            {listDesign}
    </div>

   </div>
  )
}

export default Skills