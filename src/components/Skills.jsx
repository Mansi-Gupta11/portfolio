import React from 'react'
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import github from "../assets/skills/github.svg";
import javascript from "../assets/skills/javascript.svg";
import python from "../assets/skills/python.svg";
import react from "../assets/skills/react.svg";
import sql from "../assets/skills/sql.svg";
import tailwind from "../assets/skills/tailwind.svg";


const Skills = () => {

    const skills=[
        {
        id:1,
        src:python,
        title:'Python',
        style:'shadow-blue-200'
    },

    {
        id:2,
        src:html,
        title:'HTML',
        style:'shadow-blue-200'
    },

    {
        id:3,
        src:css,
        title:'CSS',
        style:'shadow-blue-200'
    },

    {
        id:4,
        src:tailwind,
        title:'Tailwind',
        style:'shadow-blue-200'
    },

    {
        id:5,
        src:javascript,
        title:'JavaScript',
        style:'shadow-blue-200'
    },

    {
        id:6,
        src:react,
        title:'react',
        style:'shadow-blue-200'
    },

    {
        id:7,
        src:sql,
        title:'SQL',
        style:'shadow-blue-200'
    },

    {
        id:8,
        src:github,
        title:'github',
        style:'shadow-blue-200'
    },

    
]
  return (
    <div name="skills"
    className="bg-white dark:bg-gradient-to-b from-sky-900 to-black w-full h:auto md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full  md:h-full dark:text-white">
        <div>
        <p className="text-4xl font-bold  border-b-4 border-cyan-950 p-2 inline ">
            Skills
        </p>

        <p className="py-6">
            These are the technologies I've worked with 

        </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {
                skills.map(({id,src,title,style})=>(

                <div key={id} 
                className={`shadow-md md:hover:scale-105  duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>

                ))
            }

           
        </div>
      </div>
    </div>
  )
}

export default Skills
