import React from 'react'
import liIcon from '@/assets/logos/LinkedIn_icon.png';
import ghIcon from '@/assets/logos/gitLogo.png';

type Props = {}

function LeftSidebar({ }: Props) {
  return (
    <>
      <div className="">
        {/* container */}
        <div className="flex flex-col justify-center items-center align-center w-[100px] z-10">
          {/* icon wrapper */}
          <div className="flex flex-col jusitfy-center items-center gap-6 z-30 h-[150px] w-8 mt-12 pt-10 bg-white">
            <button className="">
              <img src={liIcon} className="h-6 w-6 hover:h-7 hover:w-7 transition-all duration-300" alt="Connect with me in LinkedIn!" />
            </button>
            <button>
              <img src={ghIcon} className="h-6 w-6 hover:h-7 hover:w-7 transition-all duration-300" alt="Explore GitHub" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSidebar