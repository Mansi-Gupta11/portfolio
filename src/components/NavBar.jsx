import React , {useState} from "react";
import {FaBars , FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {
    const [nav,setNav]=useState(false);

     const links=[
        {
            id:1,
            link:'home',
        },

        {
            id:2,
            link:'about',
        },

        {
            id:3,
            link:'experience',
        },
        
        {
            id:4,
            link:'projects',
        },
        
        {
            id:5,
            link:'skills',
        },

        {
            id:6,
            link:'contact',
        },
        
        
    ];


  return (
    <div className="flex justify-between items-center w-full h-20 
    px-4 bg-white text-black dark:bg-black dark:text-white fixed">
        <div> 
            <h1 className="text-5xl font-signature ml-2">Mansi</h1>
        </div>
        <ul className="hidden md:flex" >
            {links.map(({id,link}) =>(
            <li 
            key={id}
            className=" mr-5 px-4 cursor-pointer capitalize font-medium text-white-500 hover:border-b-2 border-black dark:border-cyan-500 ">
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>


        <div 
            onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 mr-5 z-10 dark:text-white md:hidden">
           
            {nav ? <FaTimes size={30}/>: <FaBars size={30} />}
        </div>

        { nav && (
            <ul className="flex flex-col justify-center  items-center absolute top-0 right-0 w-1/2 h-screen
          text-white bg-gradient-to-b from-black to-sky-950 text-white-500">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl">
                        <Link 
                        onClick={() => setNav(!nav)}
                        to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div> 
  );
};

export default NavBar
