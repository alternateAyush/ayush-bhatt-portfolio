import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
    {skill:"C++"},
    {skill:"Problem Solving"},
    {skill:"Data Structures and Algorithms"},
    {skill:"OOPs Concepts"},
    {skill:"DBMS"},
    {skill:"SQL"},
    {skill:"AWS Cloud Practitioner"},
    {skill:"HTML"},
    {skill:"CSS"},
    {skill:"Tailwind CSS"},
    {skill:"Bootstrap"},
    {skill:"JavaScript"},
    {skill:"TypeScript"},
    {skill:"React.js"},
    {skill:"Next.js"},
    {skill:"MongoDB"},
]

const AboutSection = ()=>{
    return <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-36">
            <h1 className="text-center font-bold text-4xl">
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col justify-center items-stretch space-y-10 align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                <div className="md:w-3/5">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">Get to know me!</h1>
                    <p>{`Welcome to my portfolio! I'm `}<span className="text-teal-500 font-semibold">Ayush Bhatt</span>{`, hailing from the serene landscapes of Uttarakhand, India. Currently a passionate `}<span className="text-teal-500 font-semibold">B. Tech Computer Science Engineering</span>{` student at Vellore Institute of Technology, Bhopal, I'm in the exhilarating phase of my 4th year. With a commendable `}<span className="text-teal-500 font-semibold">CGPA of 8.61</span>{`, I am enthusiastically stepping into the professional realm and actively seeking new opportunities.`}</p>
                    <br/>
                    <p>{`My expertise lies in `}<span className="text-teal-500 font-semibold">MERN stack web development</span>{`, and I possess a special affinity for crafting captivating FrontEnd experiences. Armed with a keen eye for design and an innate curiosity for the latest web technologies, I strive to bridge the gap between seamless user interactions and visually appealing interfaces.`}</p>
                    <br/>
                    <p>{`Education has always been a cornerstone of my journey. I achieved a remarkable `}<span className="text-teal-500 font-semibold">89.8% in my 12th CBSE board</span>{` examinations from Bhartiyam International School, Rudrapur. Before that, during my `}<span className="text-teal-500 font-semibold">10th CBSE board</span>{` examinations at Nosegay Public School, Khatima, I secured an impressive `}<span className="text-teal-500 font-semibold">92%</span>{`. These academic milestones reflect my dedication and consistent pursuit of excellence.`}</p>
                    <br/>
                    <p>{`Beyond the world of coding and academics, I find solace in the realm of cinema. As `}<span className="text-teal-500 font-semibold">an ardent cinephile</span>{`, I am drawn to intricate narratives and the art of character portrayal. Engaging in discussions about the profound theories that underpin complex stories is a hobby that never fails to captivate me.`}</p>
                    <br/>
                    <p>{`Thank you for visiting my portfolio. `}<Link href="https://www.linkedin.com/in/ayush-bhatt-036b2b203/" target="_blank"><span className="text-teal-500 font-semibold">Join me</span></Link>{` as I continue to evolve as a developer, merging technology with creativity to build immersive digital experiences. If you're as passionate about innovation and collaboration as I am, I'd love to connect and explore how we can make a meaningful impact together.`}</p>
                </div>
                <div className="md:w-2/5 relative">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">My Skills</h1>
                    <div className="flex flex-row flex-wrap justify-center md:justify-start">
                        {skills.map((item,idx)=>{
                            return <p 
                                    key={idx}
                                    className="select-none bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" 
                                    >{item.skill}</p>
                        })}  
                    </div>  
                    <div className='hidden w-80 h-96 md:block md:absolute md:bottom-0 md:right-0 md:z-0'>
                        <Image 
                        className="object-fill"
                        src="/about-image.png" 
                        alt="man-waving-hi" 
                        fill/>
                    </div>                                     
                </div>                
            </div>
        </div>
    </section>
}

export default AboutSection;