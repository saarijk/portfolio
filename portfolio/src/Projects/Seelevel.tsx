import React from 'react';
import image from "@/assets/mountains.png";
import sl1 from "@/assets/screencaps/sl1.png";
import sl2 from "@/assets/screencaps/sl2.png";
import sl3 from "@/assets/screencaps/sl3.png";
import sl4 from "@/assets/screencaps/sl4.png";
import sl5 from "@/assets/screencaps/sl5.png";

type Props = {};

function Seelevel({}: Props) {
  const imagePaths = [sl1, sl2, sl3, sl4, sl5];

  return (
    <>
      <div className="h-screen flex flex-col">
        <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black font-bold">See-LEVEL</h1>
        <div className="flex text-[15px] font-bold flex-1">
          {/* container */}
          <div className="w-1/2 flex-1">
            {/* left side */}
            <p className="p-6">
              This is a redesign proposal I made for See-LEVEL. It's a single-page design, and aimed to modernise See-LEVEL's existing website using contemporary design principles to elevate overall user experience.
            </p>
            <p className="px-6 py-3">
              SPECIAL FEATURES:
            </p>
            <ul className="px-6">
              <li>Dynamic and responsive design using a combination of Tailwind and traditional CSS</li>
              <li>Framer Motion for animations/transitions</li>
              <li>Custom fonts from Google Fonts</li>
              <li>Modular structure</li>
              <li>Contact form</li>
            </ul>
          </div>
          <div className="w-1/2 flex-1 h-auto">
                {/* right side */}
                    <div className="flex flex-wrap p-3 justify-around max-h-[400px] overflow-y-auto">
                        {imagePaths.map((image, index) => (
                            <img key={index} src={image} className="mb-2 border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 rounded-lg" alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                </div>
        </div>
      </div>
    </>
  );
}

export default Seelevel;
