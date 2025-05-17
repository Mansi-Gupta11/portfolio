import React from 'react'
import Mansi from "../assets/mansi2.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (

        <div name="home"

            className=" bg-sky-100 h-screen w-full dark:bg-gradient-to-b from-black via-sky-950 to-sky-900">
            
            <div className="pt-12 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-3xl sm:text-5xl font-bold dark:text-white">Hey, I am Mansi Gupta</h2>

                    <p className="dark:text-white py-4 max-w-md">
                      Software Engineer
                    </p>

                    <div >
                        <button className="group text-white w-fit px-6 py-3 
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer">
                            <a href="/Mansi_Gupta.pdf" download={true}>Download Resume</a>
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25}
                                    className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>


                <div>
                    <img src={Mansi} alt="my portfolio " className="rounded-3xl   mb-1 mx-auto w-2/3 md:w-3/6" />
                </div>


            </div>
        </div>

    );
};

export default Home;
