import React from 'react'
import Face from "../assets/portfolio/Face.jpg";
import Potato from "../assets/portfolio/Potato.jpg";
import Spotify from "../assets/portfolio/Spotify.jpg";
import Amazon from "../assets/portfolio/cedcommerce_amazon.webp"; 
// import { FaGithub } from 'react-icons/fa';


const Portfolio = () => {

  const portfolios = [

    {
      id: 1,
      src: Amazon,
      title:'Cedcommerce Amazon Channel',
      // href: "https://github.com/Mansi-Gupta11/Potato_Leaf_Disease_Detection",
    },

    {
      id: 2,
      src: Potato,
      title: 'Potato Leaf Disease Detection',
      // href: "https://github.com/Mansi-Gupta11/Potato_Leaf_Disease_Detection",
    },

    {
      id: 3,
      src: Face,
      title: 'Smart Attendance System',
      // href: "https://github.com/Mansi-Gupta11/Face_Detection_Based-_Attendance_System",
    },

    {
      id: 4,
      src: Spotify,
      title: 'Spotify Clone',
      // href: "https://github.com/Mansi-Gupta11/Spotify_Clone",
    },

  ]



  return (
    <div name="projects"
   
      className="bg-sky-100 dark:bg-gradient-to-b from-black to-sky-900 w-full
    dark:text-white h-auto md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-950">
            Projects

          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8
            px-12 sm:px-0">

          {
            portfolios.map(({ id, src, title}) => (


              <div key={id} className="bg-white text-black dark:bg-gradient-to-b from-black to-sky-900 shadow-md shadow-black hover:shadow-md dark:hover:shadow-yellow-200  hover:shadow-black rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 " />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-bold  m-4 duration-200 " >{title}</h1>
                  {/* <a href={href} className={`flex   py-3 m-2  hover:scale-105  justify-center items-center w- text-black text-xl  hover:bg-cyan-950 hover:rounded-md hover:duration-500 ' target='_blank' rel="noreferrer" `}> */}
                  {/* ${title.length < 15 ? 'mt-9' : ''} */}
                    {/* Code <FaGithub size={30}></FaGithub> */}

                  {/* </a> */}
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button> */}
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}

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
