'use client'
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import {HiArrowDown} from 'react-icons/hi';

const ProfileSection=()=>{
    return <section id="home">
        <div className='flex flex-col text-center justify-center items-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
            <div className='md:w-1/2 md:mt-2'>
                <div className='relative w-72 h-72'>
                    <Image
                        src="/profile_replace.jpg"
                        alt="profile"
                        fill
                        className='object-cover rounded-full shadow-2xl'
                    />
                </div>
            </div>
            <div className='md:w-3/5 md:mt-2'>
                <h1 className='font-bold mt-6 text-4xl md:text-7xl md:mt-0'>{`Hi, I'm Ayush!`}</h1>
                <p className='my-5 text-lg md:text-2xl'>
                    {`I'm a `}
                    <span className='text-teal-600 font-semibold'>{`student `}</span>
                    {`at Vellore Institute of Technology, Bhopal currently pursuing my bachelor's degree in `}
                    <span className='text-teal-600 font-semibold'>{`Computer Science and Engineering`}</span>{`.`}
                </p>
                <Link 
                to='projects'
                className='select-none text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >Projects</Link>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <Link 
            to="about" 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}><HiArrowDown size={35} className="animate-bounce"/></Link>
        </div>
    </section>
}

export default ProfileSection;