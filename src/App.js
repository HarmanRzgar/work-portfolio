import './App.css';
import React from 'react';
import { BsFillPersonFill, BsCodeSquare, BsGithub } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiReact, SiRedux, SiReactrouter, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiAdobexd, SiCplusplus, SiGithub, SiLinkedin, SiGmail} from 'react-icons/si'



function App() {

  let socials = [ {icon : <SiGithub/> , Link : 'https://github.com/HarmanRzgar'},
                  {icon : <SiLinkedin/> , Link : 'https://www.linkedin.com/in/harman-rzgar-muhammad-9b186a23b/'},
                  {icon : <SiGmail/> , Link : 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harmanrzgarmuhammad@gmail.com'}
];

let sidebaricons = [ {icon : <BsFillPersonFill/>, Link : "#About" },
                     {icon : <BiNetworkChart/> , Link : "#Skills"},
                     {icon : <BsCodeSquare/> , Link : "#Projects"},
                     {icon : <MdAlternateEmail/>, Link : "#Contact" }
]

let listSidebarIcons = sidebaricons.map((icons) =>
          <li><a href={icons.Link}>{icons.icon}</a></li>
);

let programming = [ 
                     {title : 'Java', icon : <SiJava/> ,  color : 'color-java'},
                     {title : 'C++', icon : <SiCplusplus/> ,  color : 'color-cpp'},
                     {title : 'JavaScript', icon : <SiJavascript/>,  color : 'color-javascript'}
]

let webnDesign = [ 
  {title : 'HTML', icon : <SiHtml5/> ,  color : 'color-html'},
  {title : 'CSS', icon : <SiCss3/> ,  color : 'color-css'},
  {title : 'Tailwind', icon : <SiTailwindcss/>,  color : 'color-tailwind'},
  {title : 'Bootstrap', icon : <SiBootstrap/> ,  color : 'color-bootstrap'},
  {title : 'React', icon : <SiReact/> ,  color : 'color-react'},
  {title : 'Photoshop', icon : <SiAdobephotoshop/>,  color : 'color-photoshop'},
  {title : 'Adobe XD', icon : <SiAdobexd/> ,  color : 'color-adobeXD'},
]

let contacts = socials.map((social) => 
<a className="contact-card"
        href={social.Link}><h3>{social.icon}</h3></a>
);

const listProgramming = programming.map((list) =>
<div className="skills-card">
<h3>{list.icon}</h3> 
<h2 className='skills-text'>{list.title}</h2>
<div className={"myBar"}><div class={list.color}></div></div>
 </div>
);

const listDesign = webnDesign.map((list) =>
<div className="skills-card">
<h3>{list.icon}</h3> 
<h2 className='skills-text'>{list.title}</h2>
<div className={"myBar"}><div class={list.color}></div></div>
 </div>
);

  return (
    <div className="App">
    <section className="nav">
         <header>
        <div className="nav-logo">
         <h1><a href="#">H.R</a></h1>
        </div>
    </header> 
    
    <nav>
        <div className="nav-list">
         <div className="line"></div>
          <ul>
            {listSidebarIcons}
        </ul>
        <div className="line"></div>
        </div>
    </nav>
    <div className="footer">&copy;{new Date().getFullYear()}</div>
    </section>
    <div className="body">
    <div className="home" id='#'>
    <h1>Hello folks! I am <span className='Typed'>Harman Rzgar</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa totam dolorum, vel enim, debitis molestias illum similique labore voluptatibus reiciendis cumque eaque? Qui culpa suscipit minus impedit accusantium similique veritatis?</p>
   </div>
   <div className="About" id='About'>
    <h1>About Me</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa totam dolorum, vel enim, debitis molestias illum similique labore voluptatibus reiciendis cumque eaque? Qui culpa suscipit minus impedit accusantium similique veritatis?</p>

   </div>
   <div className="Skills" id='Skills'>
    <h1>My Skillsets</h1> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa totam dolorum, vel enim, debitis molestias illum similique labore voluptatibus reiciendis cumque eaque? Qui culpa suscipit minus impedit accusantium similique veritatis?</p>
   <h1 className='skills-top'>Programming</h1> 
   <div className="skills-programming">
            {listProgramming}
        </div>

       <h1 className='skills-top'> Web Development & Design</h1>
        <div className="skills-show">
            {listDesign}
    </div>

   </div>
   <div className="Projects" id='Projects'>
    <h1>My work</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa totam dolorum, vel enim, debitis molestias illum similique labore voluptatibus reiciendis cumque eaque? Qui culpa suscipit minus impedit accusantium similique veritatis?</p>

   </div>
   <div className="Contact" id='Contact'>
    <h1>Contact me</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa totam dolorum, vel enim, debitis molestias illum similique labore voluptatibus reiciendis cumque eaque? Qui culpa suscipit minus impedit accusantium similique veritatis?</p>
      <div className="contact-content">
          
          {contacts}

      </div>
   </div>
   </div>
<div className="footer-secondary"></div>
</div>
  );
}

export default App;