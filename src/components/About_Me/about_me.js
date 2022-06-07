import React, { useState, useEffect, useRef } from 'react';
import './about_me.css'
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs, FaEye } from "react-icons/fa";
import { DiJqueryLogo, DiMysql } from "react-icons/di";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { scroller } from "react-scroll";


function About_me({theme}) {
  
  const [Button, SetButton] = useState(false)
  const [Eye, SetEye] = useState(false)
  const [Items, SetItems] = useState(false)
 
  const scrollToSection = () => {
    scroller.scrollTo("links", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };


  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            SetEye(true);
            
        } else {
            SetEye(false);
            SetItems(false)
        }
    });
}, []);




const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
      
  });
};


  const Refe = useRef(null)
  const executeScroll = () => Refe.current.scrollIntoView({behavior: 'smooth'})
                              
  // run this function from an event handler or an effect to execute scroll 



  return (
    
    <div className='about_me' data-theme={theme} >
      <div className={Eye? 'oke' : 'not'}>
       <div onClick={() => {
         SetButton(!Button)
         SetItems(!Items)
       }} className={Button ? 'oko actived' : 'oko'}> <FaEye className='eye'></FaEye></div> </div>
       <div className={Items ? 'options active' : 'options disable'}>
        <div onClick={goToTop} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L288 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L174.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C241.3 97.4 251.1 96 256 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C395.1 221.9 395.1 242.1 382.6 254.6z"/></svg></div>
        <div onClick={executeScroll}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg></div>
        <div onClick={scrollToSection}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"/></svg></div>
         
       </div>
       <h2 ref={Refe} >More about me</h2>
       <div  className='my_info'>
            <div className='info_text'>I am an electrical and computer engineer and I have a really big motivation for working in programming company. I want to improve my knowledge in this section and also to improve and help my team I'm working with. I am a person who wants to learn new things every day in programming which will help me to progress in my career.</div>
            

            <div className='language'>
            <h2> Familiar with </h2>
            <div className='lng_items'>
                <div className='first_column'>
                    <div className='item'><div><FaHtml5 className='icon_color'/></div><p>HTML</p></div>
                    <div className='item'><div><FaCss3 className='icon_color'/></div><p>CSS</p></div>
                    <div className='item'><div><FaBootstrap className='icon_color'/> </div> <p>Bootstrap</p></div>
                    <div className='item'><div><FaJs className='icon_color' /> </div>  <p>JavaScript</p></div>
                    
                </div>
                <div className='second_column'>
                    <div className='item'> <div><DiJqueryLogo className='icon_color' /></div> <p>JQuery</p></div>
                    <div className='item'><div> <FaNodeJs className='icon_color' /></div> <p>Node.js</p></div>
                    <div className='item'><div><DiMysql className='icon_color' /></div><p> MySQL</p></div>
                      <div className='item'> <div> <FaReact className='icon_color' /></div> <p>React</p> </div>
            </div>
            </div>

        </div>
        </div>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='wave_color' fill="#b8b8b8" fillOpacity="1" d="M0,128L9.6,144C19.2,160,38,192,58,170.7C76.8,149,96,75,115,74.7C134.4,75,154,149,173,170.7C192,192,211,160,230,133.3C249.6,107,269,85,288,101.3C307.2,117,326,171,346,208C364.8,245,384,267,403,266.7C422.4,267,442,245,461,245.3C480,245,499,267,518,256C537.6,245,557,203,576,160C595.2,117,614,75,634,58.7C652.8,43,672,53,691,96C710.4,139,730,213,749,229.3C768,245,787,203,806,197.3C825.6,192,845,224,864,240C883.2,256,902,256,922,218.7C940.8,181,960,107,979,101.3C998.4,96,1018,160,1037,192C1056,224,1075,224,1094,202.7C1113.6,181,1133,139,1152,112C1171.2,85,1190,75,1210,96C1228.8,117,1248,171,1267,160C1286.4,149,1306,75,1325,58.7C1344,43,1363,85,1382,133.3C1401.6,181,1421,235,1430,261.3L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path></svg>
        </div>
       
  )
}

export default About_me