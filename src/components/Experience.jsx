import React from 'react'
import Cedcommerce from "../assets/portfolio/Cedcommerce.jpg";
import Threecolts from "../assets/portfolio/Threecolts.png";

const Experience = () => {

  const portfolios = [

    {
      id: 1,
      src: Threecolts,
      title:'ThreeColts',
    },

    {
      id: 2,
      src: Cedcommerce,
      title: 'CedCommerce',
    },
  ]



  return (
    <div name="experience"
   
      className="bg-sky-100 dark:bg-gradient-to-b from-black to-sky-900 w-full
    dark:text-white h-auto md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-950">
            Experience

          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8
            px-12 sm:px-0">

          {
            portfolios.map(({ id, src, title,exp}) => (


              <div key={id} className="bg-white text-black dark:bg-gradient-to-b from-black to-sky-900 shadow-md shadow-black hover:shadow-md dark:hover:shadow-yellow-200  hover:shadow-black rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 " />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-bold  m-4 duration-200 " >{title}</h1>
                </div>
              </div>


            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience
