import React from "react";
import Image from "next/image";

const skills = [
    {skill:"C++"},
    {skill:"Problem Solving"},
    {skill:"Data Structures and Algorithms"},
    {skill:"OOPs Concepts"},
    {skill:"DBMS"},
    {skill:"SQL"},
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
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col justify-center items-stretch space-y-10 align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                <div className="md:w-1/2">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">Get to know me!</h1>
                    <p>{` Hi, my name is Ayush Bhatt and I am a `}
                    <span className="font-bold text-teal-500">{`Web Developer`}</span>{`.`}
                    </p><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean dolor diam, pharetra vel mollis vel, gravida id neque. 
                        Nunc rhoncus nulla mi, sed commodo justo fermentum at. 
                        Quisque rhoncus ac nunc id maximus. Fusce tempor euismod lorem quis vestibulum.
                    </p><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas id lectus vel massa commodo fermentum quis sit amet massa.  
                        Nunc rhoncus nulla mi, sed commodo justo fermentum at. 
                        Quisque rhoncus ac nunc id maximus. Fusce tempor euismod lorem quis vestibulum.
                    </p><br/>
                    <p>Lorem ipsum dolor sit amet, <span className="font-bold text-teal-500">consectetur adipiscing</span> elit. 
                        Maecenas id lectus vel massa commodo fermentum quis sit amet massa. 
                        Aenean dolor diam, pharetra vel mollis vel, gravida id neque. 
                        Quisque rhoncus ac nunc id maximus. Fusce tempor euismod lorem quis vestibulum.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">My Skills</h1>
                    <div className="flex flex-row flex-wrap justify-center md:justify-start">
                        {skills.map((item,idx)=>{
                            return <p 
                                    key={idx}
                                    className="select-none bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" 
                                    >{item.skill}</p>
                        })}
                    </div>
                    <div className='hidden md:relative w-60 h-60 md:block md:bottom-4 md:left-60 md:z-0'>
                        <Image 
                        className="object-contain"
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