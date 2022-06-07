import React from 'react'
import './Header.css'
import photo from './Person-me.png'
import Typewriter from 'typewriter-effect'
import useLocalStorage from 'use-local-storage'
import About_me from '../About_Me/about_me'
import Links from '../Social_Links/Links';
const Header =() => {
  const [theme, setTheme] = useLocalStorage('theme');
  


  return (
    <div className='header' data-theme={theme}>
      
        <div className='bounce_container'>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
        </div>


        <div className='header-info'>
          <div className='myName'> <Typewriter options={{
                  autoStart: true,
                  loop: true,
                  delay: 50
                }} onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'm Mihajlo Stojanovic").pauseFor(1000).deleteAll().start()
                  
                }} /> </div>
          <div className='about'>
            <div className='MyPhoto'>
               <img className='slika' alt='Not Found' src={photo} />
            </div>

            <div className='hover_me'>

            <div className="card middle">
      <div className="front">
        <div className='text'><p>What I do</p> 
      <span>*Hover me</span></div>
      
      </div>
      <div className="back">
      <div className="back-content middle">
          <h2>I'm pursuing the opportunity to begin my career in the web development industry.</h2>
          </div>
          </div>
          </div>
            </div>
            </div>

            <div className='themes'>
              <div className='dark' onClick={()=> {
                setTheme('dark')
              }}></div>
               <div className='blue' onClick={()=> {
                setTheme('blue')
              }}></div>
               <div className='white' onClick={()=> {
                setTheme('white')
              }}></div>
            </div>
           <div>
           </div>
        </div>
        
        <About_me></About_me> 
      <Links></Links>  
    </div>
  )
}

export default Header