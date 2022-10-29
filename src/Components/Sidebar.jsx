import React from 'react';
import '../App.css'


import { BsFillPersonFill, BsCodeSquare } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import { SiGithub, SiLinkedin, SiGmail} from 'react-icons/si'



function Sidebar() {
    let socials = [
        {icon : <SiGithub/> , Link : 'https://github.com/HarmanRzgar'},
        {icon : <SiLinkedin/> , Link : 'https://www.linkedin.com/in/harman-rzgar-muhammad-9b186a23b/'},
        {icon : <SiGmail/> , Link : 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harmanrzgarmuhammad@gmail.com'}
     ];
     
     let sidebaricons = [ 
       {icon : <BsFillPersonFill/>, Link : "#About" },
       {icon : <BiNetworkChart/> , Link : "#Skills"},
       {icon : <BsCodeSquare/> , Link : "#Projects"},
       {icon : <MdAlternateEmail/>, Link : "#Contact" }
     ];
     
     let listSidebarIcons = sidebaricons.map((icons) =>
               <li><a href={icons.Link}>{icons.icon}</a></li>
     );
     let contacts = socials.map((social) => 
<a className="contact-card"
        href={social.Link}><h3>{social.icon}</h3></a>
);
  return (
    <section className="nav" id=''>
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
  
   <div className="contact-content">
     {contacts}
 </div> </div>
</nav>
<div className="footer">&copy;{new Date().getFullYear()}</div>
</section>
  )
}

export default Sidebar