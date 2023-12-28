import React from 'react'
import image from "@/assets/mountains.png";
import rm1 from "@/assets/screencaps/rm1.png";
import rm2 from "@/assets/screencaps/rm2.png";

type Props = {}

function RecipeMe({}: Props) {
    const imagePaths = [rm1, rm2];
  return (
    <>
        <div>
            <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black font-bold">RecipeMe</h1>
            <div className="flex text-[15px] font-bold">
                {/* container */}
                <div className="w-1/2">
                    {/* left side */}
                    <p className="p-6">
                        This was my first successful TypeScript/React project. It uses a custom API to retrieve recipes for users to browse.
                    </p>
                    <p className="px-6 py-3">
                        SPECIAL FEATURES:
                    </p>
                    <ul className="px-6">
                        <li>Uses Tailwind CSS for styling</li>
                        <li>Framer Motion for animations/transitions</li>
                        <li>Custom fonts from Google Fonts</li>
                        <li>Modular structure</li>
                        <li>Search function using custom API</li>
                        <li>Users can "favourite" recipes</li>
                        <li>Built on Vite</li>
                    </ul>
                    
                </div>
                <div className="w-1/2 flex-1 h-full overflow-y-auto">
                {/* right side */}
                    {imagePaths.map((image, index) => (
                        <img key={index} src={image} className="p-3" alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default RecipeMe