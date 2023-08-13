import React from "react";
import Link from "next/link";
import {AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai';

const Footer=()=>{
    return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <hr className="w-full h-0.5 mx-auto mt-8 border-0 bg-neutral-200"></hr>
        <div className="flex flex-col mx-auto text-center p-4 md:flex-row md:justify-between">
            <div className="text-neutral-500">© 2023 Ayush Bhatt</div>
            {/* <div className="text-neutral-500 dark:text-neutral-100">© 2023 Ayush Bhatt</div> */}
            <div className="flex flex-row justify-center items-center space-x-2 mb-2">
                <Link href="https://github.com/alternateAyush" rel="noreferrer" target="_blank">
                    <AiOutlineGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                </Link>
                <Link href="https://www.linkedin.com/in/ayush-bhatt-036b2b203/" rel="noreferrer" target="_blank">
                    <AiOutlineLinkedin size={30} className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                </Link>
            </div>
        </div>
    </footer>
    )
}

export default Footer;