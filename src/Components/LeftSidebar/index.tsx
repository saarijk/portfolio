import React from 'react'
import liIcon from '@/assets/logos/LinkedIn_icon.png';
import ghIcon from '@/assets/logos/gitLogo.png';

type Props = {}

function LeftSidebar({ }: Props) {
  return (
    <>
      <div className="h-[100vh] left-sidebar">
        {/* container */}
        <div className="flex flex-col justify-center items-center align-center h-full w-[100px] z-10 sidebar-line">
          {/* icon wrapper */}
          <div className="flex flex-col jusitfy-center items-center gap-6 z-30 h-[150px] w-8 mt-12 pt-10 ml-[-16px] bg-white mx-auto">
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