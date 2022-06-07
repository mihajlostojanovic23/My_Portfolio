import React from 'react'
import './Links.css'
import Night_And_Day from './N&D.PNG'
import Weather from './Weather.PNG'
import ToDoList from './ToDo.PNG'
import Rock from './Rock.PNG'
import Portfolio from './Portfolio.PNG'
import ChuckNorris from './ChuckNorris.PNG'
import Quiz from './Quiz.PNG'
import ProdavnicaKafe from './ProdavnicaKafe.jpg'
import ChatApp from './Chat.PNG'
import CV from './Mihajlo_Stojanovic_CV.pdf'
import Button from '@mui/material/Button';
import GithubPic from './GitHub-Naslovna.png'

   

function Links() {
  
  const data = [
    {
    Name: 'Night & Day',
    Picture: Night_And_Day,
    Description: 'One of my projects in which I created a CRUD application in which the administrator can add, modify, read and delete pizzas he has set. Visitors can see the possibility of researching the details',
    Link: 'https://github.com/mihajlostojanovic23/Night_And_Day_CRUD',
    Tools: [
      {tool: 'HTML' },
      {tool: 'CSS'},
      {tool: 'JavaScript'},
      {tool: 'NodeJS'},
      {tool: 'MySQL'},
      {tool: 'CRUD'},
      {tool: 'JQuery'}
]    },


{
  Name: 'Weather API',
  Picture: Weather,
  Description: 'In this project, my wish was to create a simple web application in which I can research information about the weather, as well as humidity, wind and more.',
  Link: 'https://github.com/mihajlostojanovic23/Weather-API',
  Tools: [
    {tool: 'NodeJS' },
    {tool: 'Express'},
    {tool: 'API'}
]    },



{
  Name: 'To Do List',
  Picture: ToDoList,
  Description: 'This is one of my first projects in which I wanted to make a list in which I can add my tasks and delete them when I finish the task.',
  Link: 'https://github.com/mihajlostojanovic23/To-Do-List',
  Tools: [
  {tool: 'HTML' },
  {tool: 'CSS'},
  {tool: 'JavaScript'}
] },


{
  Name: 'Rock Paper Scissors',
  Picture: Rock,
  Description: 'In this project, my goal was to figure out how to use a foreach loop. I made one little game',
  Link: 'https://github.com/mihajlostojanovic23/Rock-Paper-Scissors',
  Tools: [
  {tool: 'HTML' },
  {tool: 'CSS'},
  {tool: 'JavaScript'}
] },


{
  Name: 'Chat Application',
  Picture: ChatApp ,
  Description: 'In this project I learned to use socket.io. I created one real-time chat app',
  Link: 'https://github.com/mihajlostojanovic23/Chat',
  Tools: [
  {tool: 'React'},
  {tool: 'NodeJS'},
  {tool: 'Socket.io'},
  {tool:'MUI'}
] },

{
  Name: 'C.N. Random Jokes',
  Picture: ChuckNorris ,
  Description: 'One of my projects where I wanted to learn how working with APIs works',
  Link: 'https://github.com/mihajlostojanovic23/Chuck-Norris-Random-Jokes',
  Tools: [
  {tool: 'HTML' },
  {tool: 'Express'},
  {tool: 'NodeJS'},
  {tool: 'API'}
] },

{
  Name: 'Quiz App',
  Picture: Quiz ,
  Description: 'This project was done in the React programming language. I wanted to create a more complex application and master the work with the API',
  Link: 'https://github.com/mihajlostojanovic23/Quiz-API',
  Tools: [
  {tool: 'React'},
  {tool: 'API'},
  {tool: 'MUI'}
] },

{
  Name: 'Prodavnica Kafe',
  Picture: ProdavnicaKafe ,
  Description: 'One of my college projects where I made a simple CRUD application where there is an administrator who can perform certain functions',
  Link: 'https://github.com/mihajlostojanovic23/prodavnica_kafe',
  Tools: [
  {tool: 'HTML' },
  {tool: 'CSS'},
  {tool: 'JavaScript'},
  {tool: 'JQuery'},
  {tool: 'NodeJS'},
  {tool: 'Express'},
  {tool: 'MySQL'}
] },

{
  Name: 'Portfolio',
  Picture: Portfolio ,
  Description: 'I wanted to showcase some of my projects easier instead of just sending GitHub links , would be bothersome for people viewing them.',
  Link: 'https://github.com/mihajlostojanovic23/My_Portfolio',
  Tools: [
  {tool: 'React' },
  {tool: 'Heroku'}
] },



    
    ]

 
  return (
    <div className='links'>
        <h2>Links</h2> 
        <div className='links_info'>
            <div className='link'><a href={CV} target="_blank">My CV</a></div>
            <div className='link'><a href='https://www.linkedin.com/in/mihajlo-stojanovi%C4%87-869638240/' target="_blank">LinkedIn</a></div>
            <div className='link'><a href='https://github.com/mihajlostojanovic23' target='_blank'>GitHub</a></div>

        </div>
        <h2 className='projects_title'>My Projects</h2>
       
        <div className='projects_content'>
          <div className='projects'>

          {data.map((info) => {
    return <div className='project'>
             <div className='project_photo'> <a target='_blank' href={info.Link}> <img className='pic' src={info.Picture} />
             <div className='github'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
 </div>
               </a>
               
              </div>
             <div className='project_name'>{info.Name}</div> 
             <div className='project_description'>{info.Description}</div>
            <div className='project_tools'>  {info.Tools.map((c,i) => <div  key={i}> <Button className='btn' variant='text'>{c.tool}</Button> </div>)} </div>
             
           </div>
  })}


          </div>
         
        </div>
    </div>
  )
}

export default Links