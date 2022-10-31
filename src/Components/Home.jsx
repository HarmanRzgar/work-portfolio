import React from 'react'
import '../App.css'


function Home() {
 
  return (
    <div className="home" id='#'>
      <div className="pfp">
        <img src={'https://avatars.githubusercontent.com/u/108234752?v=4'} alt="pfp" />
      </div>
      <div className="home-main">
    <h1>Hello folks! I am <span className='Typed'>Harman Rzgar</span></h1>
    <p>I am a Junior Front-End developer and progammer from Kurdistan. </p>
   {/* <div className="button" id='button-resume'>My Resume</div>*/}
    </div>
   </div>
  )
}

export default Home