import React from 'react'

const About = () => {
    return (
        <div name="about" 
        className="w-full h-auto md:h-screen bg-gradient-to-b from-sky-900 to-black text-white">
            <div className= " max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-3">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-950">About</p>
                </div>

                <p className="text-md mt-20">
                    As a dedicated computer science student, I am fueled by my unwavering
                    commitment to lifelong learning, which fuels my
                    aspiration to become a skilled software engineer.
                </p>

                <br />
                <p className="text-md ">
                    My journey has equipped me with a deep proficiency in programming language
                    Python. My skill set extends to a comprehensive understanding
                    of Data Structures and Algorithm and Web Development technologies like HTML, CSS, TailwindCSS , and JavaScript.
                    My academic background has fostered a strong foundation in Object-Oriented Programming and Database Management System,
                    which I am enthusiastic about applying to real-world projects.
                    I've applied my skills to create various projects, giving me hands-on experience.
                    These projects helped me to learn and understand things in a practical way.
                    I achieved a significant victory by winning the Project Display Contest at Techexpo.
                    This recognition not only validates my hard work but also motivates me to continue pushing the boundaries
                    of innovation in the tech world.

                </p>

                <br />
                <p className="text-md">
                    Through my active participation as a member of the IEEE PSIT Student Branch, I've honed my behavioral skills,
                    which have significantly contributed to my personal and professional development.
                    These experiences have enhanced my ability to excel in teamwork, where I've learned the art of collaboration,
                    cooperation, and the importance of diverse perspectives.Through Project Management, I've fine-tuned my organizational
                    and time management skills. My involvement in IEEE PSIT STUDENT BRANCH has truly been a transformative experience, enabling me to cultivate and apply these valuable skills,
                    which I now leverage in various facets of my academic and professional life.
                    I approach each challenge with a creative mindset, striving to craft elegant and impactful solutions.
                </p>

            </div>
        </div>
    )
}

export default About
