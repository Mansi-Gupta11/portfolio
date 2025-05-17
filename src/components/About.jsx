import React from 'react'

const About = () => {
    return (
        <div name="about" 
        
        className="bg-white text-black w-full h-auto md:h-screen dark:bg-gradient-to-b from-sky-900 to-black dark:text-white">
            <div className= " max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-3">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-950">About</p>
                </div>

                <br />
                <p className="text-md ">
                I am an enthusiastic and motivated backend developer with over 1 year of hands-on industry experience. My expertise lies in backend development, data structures, and scalable system design. I have worked extensively with technologies such as PHP, MongoDB, and Phalcon to build efficient automation workflows and seamless system integrations. I enjoy solving complex technical problems and thrive in agile, fast-paced environments. My experience collaborating with cross-functional teams has enabled me to deliver reliable, high-performance solutions. I’m passionate about continuous learning and building impactful software that scales.
                </p>
                <br />

            </div>
        </div>
    )
}

export default About
