import React from 'react'
import Face from "../assets/portfolio/Face.jpg";
import Potato from "../assets/portfolio/Potato.jpg";
import Spotify from "../assets/portfolio/Spotify.jpg";



const Portfolio = () => {
  const portfolios=[
    {
      id:1,
      src:Potato,
    },

    {
      id:2,
      src:Face,
    },

    {
      id:3,
      src:Spotify,
    },

  ]



  return (
    <div name="portfolio"
    className=" bg-gradient-to-b from-black to-sky-900 w-full
    text-white h-auto md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-cyan-950">
          Portfolio

        </p>
        <p className="py-6">
          check out some of my work right here
        </p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0">

        {
          portfolios.map(({id,src})=>(
            
            
              <div key={id} className="shadow-md shadow-black rounded-lg">
                <img 
                src={src} 
                alt="" 
                className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
  
                </div>
              </div>
  
          
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
