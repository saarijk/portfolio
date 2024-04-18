import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <div className="w-full flex justify-center header">
                {/* container */}
                <div className="w-5/6 flex justify-between h-[60px]">
                    <div>
                        <h1></h1>
                    </div>
                    {/* buttons */}
                    <div className="flex">
                        <div className="flex justify-end items-end h-[60px] hover:bg-black hover:text-white transition-all duration-300">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Home</button>
                        </div>
                        <div className="flex justify-end items-end h-[60px] hover:bg-black hover:text-white transition-all duration-300">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Skills</button>
                        </div>
                        <div className="flex justify-end items-end h-[60px] hover:bg-black hover:text-white transition-all duration-300">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Projects</button>
                        </div>
                        <div className="flex justify-end items-end h-[60px] hover:bg-black hover:text-white transition-all duration-300">
                            <button className="text-md font-montserrat font-bold px-4 py-1">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header