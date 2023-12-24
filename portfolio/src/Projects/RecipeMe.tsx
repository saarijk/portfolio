import React from 'react'
import image from "@/assets/mountains.png";

type Props = {}

function RecipeMe({}: Props) {
  return (
    <>
        <div>
            <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black">RecipeMe</h1>
            <div className="flex">
                {/* container */}
                <div className="w-1/2">
                    {/* left side */}
                    <p className="p-6 border-t-2 border-black">
                        This was my first successful TypeScript/React project. It uses a custom API to retrieve recipes for users to browse.
                    </p>
                    <p className="px-6 py-3">
                        Special features:
                    </p>
                    <p className="px-6 py-3">
                        <a href="/" target='_blank' className='hover:border-b-[1px] transition-all ease-in-out duration-500 hover:border-black border-transparent'>View live site here</a>
                    </p>
                </div>
                <div className="w-1/2">
                    {/* right side */}
                    <img src={image} className="p-6" />
                </div>
            </div>
        </div>
    </>
  )
}

export default RecipeMe