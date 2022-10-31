import './App.css';

import Home from './Components/Home'
import About from './Components/About'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'

import React from 'react';
import { BsFillPersonFill, BsCodeSquare, BsGithub } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiReact, SiRedux, SiReactrouter, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiAdobexd, SiCplusplus, SiGithub, SiLinkedin, SiGmail} from 'react-icons/si'


function App() {





  return (
    <div className="App">
    <Sidebar/>
    <div className="body" >
    <Home/>
    <About/>
   <Skills/>
   <Work/>
   <Contact/>
   </div>
<div className="footer-secondary"></div>
</div>
  );
}

export default App;
