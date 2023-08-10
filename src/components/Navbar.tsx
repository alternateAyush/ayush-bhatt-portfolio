"use client"
import React from 'react';
import {useState} from 'react';
import {useTheme} from 'next-themes'
import {Link} from 'react-scroll';
import {RiMoonFill,RiSunLine} from 'react-icons/ri'
import {IoMdMenu,IoMdClose} from 'react-icons/io'

interface NavItem{
    label:string,
    page:string
}

const NAV_ITEMS:Array<NavItem> = [
    {
        label:'Home',
        page:'home',
    },
    {
        label:'About',
        page:'about',
    },
    {
        label:'Projects',
        page:'projects',
    }
]

const Navbar = ()=>{
    const {systemTheme,theme,setTheme} = useTheme();
    const currentTheme = (theme==="system")? systemTheme:theme;
    const [navbar,setNavBar] = useState(false);
    return (
        <header className="w-full mx-auto px-4 bg-white border shadow fixed top-0 z-50 sm:px-10">
            <div className='md:flex md:items-center justify-between'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='md:py-5 md:block'>
                            <h2 className='text-2xl font-bold '>Ayush Bhatt</h2>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={()=>{setNavBar(!navbar)}}>{(navbar)? <IoMdClose size={30}/>:<IoMdMenu size={30}/>}</button>
                        </div>                    
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar? 'block': 'hidden'}`}>
                        <div className='justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                            {NAV_ITEMS.map((navItem,idx)=>{
                                return <Link 
                                         to={navItem.page} 
                                         key={idx}
                                         className="cursor-pointer block lg:inline-block text-neutral-900 hover:text-neutral-500"
                                         activeClass='active'
                                         smooth={true}
                                         spy={true}
                                         offset={-100}
                                         duration={500}
                                         onClick={()=>{setNavBar(!navbar)}}>{navItem.label}</Link>
                            })}
                            {
                                (currentTheme==="dark")?
                                <button onClick={()=>setTheme("light")} className='bg-slate-100 rounded-xl p-2'><RiSunLine/></button>:
                                <button onClick={()=>setTheme("dark")} className='bg-slate-100 rounded-xl p-2'><RiMoonFill/></button>
                            }
                        </div>
                    </div>  
                </div>
                             
            </div>
        </header>
    )
}

export default Navbar;