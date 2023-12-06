import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import {BsGithub,BsArrowUpRightSquare} from 'react-icons/bs';

const projects = [
    {
        title:"Algorithms.io",
        description:"Algorithms.io provide you with visualization of many popular algorithms which helps you understand the working of these algorithms clearly with fun.",
        image:"/placeholder-image.png",
        github:"https://github.com/alternateAyush/my-algos-app.git",
        link:"https://my-algo-visualizer.vercel.app/",
    },
    {
        title:"LibraryCafe",
        description:"The Library API provides essential book management functionalities. Users can seamlessly post details of new books, including title, synopsis, author, price, publish date, genre list, and availability, directly into the database. Additionally, the API enables users to retrieve books based on title or author name, perform searches, and sort books by title or price.",
        image:"/placeholder-image.png",
        github:"https://github.com/alternateAyush/Library-API",
        link:"https://library-api-v1.onrender.com/",
    },
    {
        title:"Find-My-Recipe",
        description:"One stop to find find all your favorite recipies with their nutrition info, search recipes by cuisine, calories, meal and many more filters.",
        image:"/find-my-recipe.png",
        github:"https://github.com/alternateAyush/find-my-recipe.git",
        link:"https://find-my-recipe-oxj9.vercel.app/",
    },
];

const ProjectsSection=()=>{
    return <section id="projects">
        <div>
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-20">
                {projects.map((project,idx)=>{
                    return <div key={idx}>
                        <SlideUp offset="-300px 0px 0px 0px">
                        <div className="flex flex-col  animate-slideUpCubiBezier animationDelay-2 md:flex-row md:space-x-12">
                            <div className="mt-8 md:w-1/2">
                                <Link href={project.github} target="_blank">
                                    <Image 
                                    src={project.image} 
                                    alt={`${project.title}-image`} 
                                    className="rounded-xl shadow-xl hover:opacity-70"
                                    height={1000} 
                                    width={1000}/>
                                </Link>
                                
                            </div>
                            <div className="mt-12 md:w-1/2">
                                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
                                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                <div className="flex flex-row align-bottom space-x-4">
                                    <Link href={project.github} target="_blank">
                                        <BsGithub size={30} className="hover:-translate-y-1 transiton-transform cursor-pointer"/>
                                    </Link>
                                    <Link href={project.link} target="_blank">
                                        <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transiton-transform pointer:cursor"/>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                        </SlideUp>                                   
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default ProjectsSection;