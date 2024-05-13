import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {}

function Header({ }: Props) {
    const location = useLocation();

    return (
        <div className="w-full flex justify-center">
            {/* container */}
            <div className="w-5/6 flex justify-between h-[60px] bg-white bg-opacity-75 backdrop-blur">
                <div>
                    <h1></h1>
                </div>
                {/* buttons */}
                <div className="flex bg-white">
                    <div className={`flex justify-end items-end h-[60px] ${location.pathname === "/index" ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} transition-all duration-300`}>
                        <Link to="/index">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Home</button>
                        </Link>
                    </div>
                    <div className={`flex justify-end items-end h-[60px] ${location.pathname === "/skills" ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} transition-all duration-300`}>
                        <Link to="/skills">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Skills</button>
                        </Link>
                    </div>
                    <div className={`flex justify-end items-end h-[60px] ${location.pathname === "/projects" ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} transition-all duration-300`}>
                        <Link to="/projects">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Projects</button>
                        </Link>
                    </div>
                    <div className={`flex justify-end items-end h-[60px] ${location.pathname === "/contact" ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} transition-all duration-300`}>
                        <Link to="/contact">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Contact Me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
